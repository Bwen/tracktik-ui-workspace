<script lang="ts">
    import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import { browser } from '$app/env';
    import Form from '$lib/components/ext/form/Form.svelte';
    import { session } from '$app/stores';
    import { pageState, getTableDataColumns, getFiltersFieldset, getCounters } from '$lib/stores/page/employee.list';
    import ProfileTooltip from '$lib/components/ProfileTooltip.svelte';
    import { showProfileToolTip } from '$lib/js/utils';
    import TableDataCountTile from '$components/stats/TableDataCountTile.svelte';
    import SingleCountTile from '$components/stats/SingleCountTile.svelte';
    import { FieldType } from '$lib/js/form';

    let isLoading = false;
    let columns = getTableDataColumns($session);

    let filterFields = [];
    (async () => filterFields = await getFiltersFieldset($session))();

    let employees = [];
    let totalEntries = 0;
    async function fetchEntries() {
        let forAllAccountAssignments = $pageState.filters.forAllAccountAssignments;
        let restFilters = JSON.parse(JSON.stringify($pageState.filters));
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
            'include': 'region,region.address,address,username',
            'limit': $pageState.tableData.perPage,
            'offset': $pageState.tableData.offset,
            ...restFilters,
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            $pageState.tableData.offset = result.meta.offset;
            employees = result.data;
        }

        isLoading= false;
    }

    function resetFilters() {
        filterFields[0].fields[0].value = '';
        filterFields[0].fields[1].value = '';
        filterFields[0].fields[2].value = '';
        filterFields[0].fields[3].value = 'ACTIVE';
        filterFields[0].fields[4].value = '';
        filterFields[1].fields[0].checked = false;
        filterFields[1].fields[1].checked = false;
        filterFields = filterFields;
        
        $pageState.filters['status'] = 'ACTIVE';
        $pageState.filters.forAllAccountAssignments['zone'] = undefined;
        $pageState.filters.forAllAccountAssignments['department'] = undefined;
        delete $pageState.filters['q'];
        delete $pageState.filters['region'];
        delete $pageState.filters['clockedIn'];
        delete $pageState.filters['inactive'];
    }

    const counters = getCounters();
    function onClickCounter(type) {
        resetFilters();
        Object.assign($pageState.filters, counters[type].filter);
        if (counters[type].field) {
            const index = counters[type].field;
            filterFields[index[0]].fields[index[1]].checked = true;
        }

        fetchEntries();
    }

    async function fetchCounter(type) {
        counters[type].isLoading = true;
        counters[type].count = await fetchCount(counters[type].filter);
        counters[type].isLoading = false;
    }

    async function fetchCount(filters) {
        let res = await request('/employees', METHODS.GET, {status: 'ACTIVE', include: 'id', limit: 1, ...filters});
        if (!res.ok) {
            return 0;
        }
        
        let result = await res.json();
        return result.meta.count;
    }

    async function onPerPageChange(event) {
        $pageState.tableData.perPage = event.detail.perPage;
        await fetchEntries();
    }

    async function onPageChange(event) {
        $pageState.tableData.offset = event.detail.pageNumber * $pageState.tableData.perPage;
        await fetchEntries();
    }

    async function onFilterChange(event) {
        const field = event.detail.field;
        let name = field.name;
        if (name === 'q' && field.value.length !== 0 && field.value.length < 3) {
            return;
        }

        if (['department', 'zone'].indexOf(name) !== -1) {
            $pageState.filters.forAllAccountAssignments[name] = field.value ?? undefined;
        } else {
            $pageState.filters[name] = field.value;
            if (!field.value || (field.type === FieldType.CHECKBOX && !field.checked)) {
                delete $pageState.filters[name];
            }
        }

        await fetchEntries();
    }
    
    let tooltipProfile = null;
    function onCellEnter(event) {
        tooltipProfile = showProfileToolTip(event, employees, 'cell-avatar', '.page-employee-list .wrapper-profile-tooltip');
    }

    function onCellLeave() {
        tooltipProfile = null;
    }

    if (browser) {
        session.subscribe(() => {
            fetchEntries();
            for (let type in counters) {
                fetchCounter(type);
            }
        });
    }

    fetchEntries();
    for (let type in counters) {
        fetchCounter(type);
    }
</script>

<div class="wrapper-content">
    <div class="stats">
        <TableDataCountTile count={totalEntries} />
        {#each Object.entries(counters) as [type, counter]}
        <SingleCountTile 
            icon={counter.icon} 
            on:link-click={() => onClickCounter(type)} 
            count={counter.count} 
            isLoading={counter.isLoading}
            text={counter.text} 
        />
        {/each}
    </div>
    <div class="content"><div class="page-employee-list">
        <ProfileTooltip profile={tooltipProfile} active={Boolean(tooltipProfile)} />
        <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
        <TableData 
            columns={columns}
            entries={employees}
            isLoading={isLoading}
            perPage={$pageState.tableData.perPage}
            offset={$pageState.tableData.offset}
            totalEntries={totalEntries}
            on:page-change={onPageChange}
            on:per-page-change={onPerPageChange}
            on:cell-enter={onCellEnter}
            on:cell-leave={onCellLeave}
            uid="id"
        />
    </div></div>
</div>

<style lang="css">
    .wrapper-content {
        display: flex;
        flex-direction: column;
    }

    .page-employee-list :global(.filters form) {
        display: flex;
        flex-direction: column;
    }

    .page-employee-list :global(.filters .wrapper-checkbox) {
        float: left;
    }

    .page-employee-list :global(.wrapper-field) {
        padding-bottom: 0;
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
