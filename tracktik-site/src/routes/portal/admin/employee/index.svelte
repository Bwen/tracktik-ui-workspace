<script lang="ts">
	import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import { browser } from '$app/env';
    import Form from '$lib/components/ext/form/Form.svelte';
    import { session } from '$app/stores';
    import { pageState, getTableDataColumns, getFiltersFieldset } from '$lib/stores/page/employee.list';

    let isLoading = false;
    let columns = getTableDataColumns();
    
    let filterFields = [];
    (async () => filterFields = await getFiltersFieldset($session))();

    let employees = [];
    let totalEntries = 0;
    let perPage = $pageState.tableData.perPage;
    let offset = $pageState.tableData.offset;
    let filters = $pageState.filters;
    async function fetchEmployees() {
        $pageState.filters = filters;

        let forAllAccountAssignments = filters.forAllAccountAssignments;
        let restFilters = JSON.parse(JSON.stringify(filters));
        delete restFilters['forAllAccountAssignments'];

        if (forAllAccountAssignments.zone && forAllAccountAssignments.department) {
            restFilters['forAllAccountAssignments'] = `${forAllAccountAssignments.zone},${forAllAccountAssignments.department}`;
        } else if (forAllAccountAssignments.zone) {
            restFilters['forAllAccountAssignments'] = forAllAccountAssignments.zone;
        } else if (forAllAccountAssignments.department) {
            restFilters['forAllAccountAssignments'] = forAllAccountAssignments.department;
        }

        isLoading = true;
        let res = await request('/employees', METHODS.GET, {
            'include': 'region,region.address,address',
            'limit': perPage,
            'offset': offset,
            ...restFilters,
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            offset = result.meta.offset;
            employees = result.data;
        }

        isLoading= false;
    }

    async function onPerPageChange(event) {
        perPage = event.detail.perPage;
        $pageState.tableData.perPage = perPage;
        await fetchEmployees();
    }

    async function onPageChange(event) {
        offset = event.detail.pageNumber * perPage;
        $pageState.tableData.offset = offset;
        await fetchEmployees();
    }

    async function onFilterChange(event) {
        offset = 0;
        const field = event.detail.field;
        let name = field.name;
        if (name === 'q' && field.value.length !== 0 && field.value.length < 4) {
            return;
        }

        if (['department', 'zone'].indexOf(name) !== -1) {
            filters.forAllAccountAssignments[field.name] = field.value ?? undefined;
        } else {
            filters[name] = field.value;
            if (!field.value) {
                delete filters[field.name];
            }
        }

        await fetchEmployees();
    }

    if (browser) {
        session.subscribe(async () => {
            await fetchEmployees();
        });

        (async () => await fetchEmployees())();
    }
</script>

<div class="wrapper-content"><div class="content">
    <div class="page-employee-list">
        <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
        <TableData 
            columns={columns}
            entries={employees}
            isLoading={isLoading}
            perPage={perPage}
            offset={offset}
            totalEntries={totalEntries}
            on:page-change={onPageChange}
            on:per-page-change={onPerPageChange}
            uid="id"
        />
    </div>
</div></div>

<style lang="css">
    .page-employee-list .filters :global(form),
    .page-employee-list .filters :global(fieldset) {
        display: flex;
    }

    .page-employee-list :global(.wrapper-table-data) {
        font-size: .75em;
    }

    .page-employee-list :global(.cell-checkbox) {
        width: 1%;
    }

    .page-employee-list :global(.cell-uid) {
        width: 5%;
    }

    .page-employee-list :global(.cell-phone) {
        width: 10%;
    }

    .page-employee-list :global(.cell-region) {
        width: 15%;
    }

    .page-employee-list :global(td.cell-phone) {
        text-align: center;
    }
</style>
