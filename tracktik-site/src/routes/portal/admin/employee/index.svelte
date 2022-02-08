<script lang="ts">
    import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import { browser } from '$app/env';
    import Form from '$lib/components/ext/form/Form.svelte';
    import { session } from '$app/stores';
    import { pageState, getTableDataColumns, getFiltersFieldset } from '$lib/stores/page/employee.list';
    import ProfileTooltip from '$lib/components/ProfileTooltip.svelte';
    import { showProfileToolTip } from '$lib/js/utils';
    import { faUsers, faUserClock, faStopwatch } from '@fortawesome/free-solid-svg-icons';
    import TableDataCountTile from '$components/stats/TableDataCountTile.svelte';
    import SingleCountTile from '$components/stats/SingleCountTile.svelte';
import { FieldType } from '$lib/js/form';

    let isLoading = false;
    let columns = getTableDataColumns($session);

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
            'include': 'region,region.address,address,username',
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

    function resetFilters() {
        filterFields[0].fields[0].value = '';
        filterFields[0].fields[1].value = '';
        filterFields[0].fields[2].value = '';
        filterFields[0].fields[3].value = 'ACTIVE';
        filterFields[0].fields[4].value = '';
        filterFields[1].fields[0].checked = false;
        filterFields[1].fields[1].checked = false;
        filterFields = filterFields;
        
        filters['status'] = 'ACTIVE';
        filters.forAllAccountAssignments['zone'] = undefined;
        filters.forAllAccountAssignments['department'] = undefined;
        delete filters['q'];
        delete filters['region'];
        delete filters['clockedIn'];
        delete filters['inactive'];
    }

    let isLoadingAE = false;
    let countAE = 0;
    async function fetchAE() {
        isLoadingAE = true;
        let res = await request('/employees', METHODS.GET, {status: 'ACTIVE', include: 'id', limit: 1});
        if (res.ok) {
            let result = await res.json();
            countAE = result.meta.count;
        }
        
        isLoadingAE = false;
    }

    function onClickAE() {
        resetFilters();
        fetchEmployees();
    }

    let isLoadingClockIn = false;
    let countClockIn = 0;
    async function fetchClockInCount() {
        isLoadingClockIn = true;
        let res = await request('/employees', METHODS.GET, {status: 'ACTIVE', include: 'id', clockedIn: true, limit: 1});
        if (res.ok) {
            let result = await res.json();
            countClockIn = result.meta.count;
        }
        
        isLoadingClockIn = false;
    }

    function onClickClockIn() {
        resetFilters();
        filterFields[1].fields[0].checked = true;
        filters['clockedIn'] = true;

        fetchEmployees();
    }

    let isLoadingInactive = false;
    let countInactive = 0;
    async function fetchInactiveCount() {
        isLoadingInactive = true;
        let res = await request('/employees', METHODS.GET, {status: 'ACTIVE', include: 'id', inactive: true, limit: 1});
        if (res.ok) {
            let result = await res.json();
            countInactive = result.meta.count;
        }
        
        isLoadingInactive = false;
    }

    function onClickInactive() {
        resetFilters();
        filterFields[1].fields[1].checked = true;
        filters['inactive'] = true;

        fetchEmployees();
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
        const field = event.detail.field;
        let name = field.name;
        if (name === 'q' && field.value.length !== 0 && field.value.length < 3) {
            return;
        }

        if (['department', 'zone'].indexOf(name) !== -1) {
            filters.forAllAccountAssignments[name] = field.value ?? undefined;
        } else {
            filters[name] = field.value;
            if (!field.value || (field.type === FieldType.CHECKBOX && !field.checked)) {
                delete filters[name];
            }
        }

        await fetchEmployees();
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
            fetchEmployees();
            fetchAE();
            fetchClockInCount();
            fetchInactiveCount();
        });
    }

    fetchEmployees();
    fetchAE();
    fetchClockInCount();
    fetchInactiveCount();
</script>

<div class="wrapper-content">
    <div class="stats">
        <TableDataCountTile count={totalEntries} />
        <SingleCountTile icon={faUsers} on:link-click={onClickAE} count={countAE} isLoading={isLoadingAE} text="Active Employees" />
        <SingleCountTile icon={faStopwatch} on:link-click={onClickInactive} count={countInactive} isLoading={isLoadingInactive} text="Inactive Employees" />
        <SingleCountTile icon={faUserClock} on:link-click={onClickClockIn} count={countClockIn} isLoading={isLoadingClockIn} text="Clocked-In Employees" />
    </div>
    <div class="content"><div class="page-employee-list">
        <ProfileTooltip profile={tooltipProfile} active={Boolean(tooltipProfile)} />
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
