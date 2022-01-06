<script type="ts">
    import TableData from '$components/ext/TableData.svelte';
    import Form from '$lib/components/ext/form/Form.svelte';
	import { request, METHODS } from '$lib/js/restClient';
    import { pageState, getTableDataColumns, getFiltersFieldset } from '$lib/stores/page/account-assignment-list';
    import ProfileTooltip from '$lib/components/ProfileTooltip.svelte';
    import { showProfileToolTip } from '$lib/js/utils';
    import { browser } from '$app/env';
    import { session } from '$app/stores';
    
    let columns = getTableDataColumns($session);
    let filterFields = [];
    (async () => filterFields = await getFiltersFieldset($session))();

    export let relationId: number;

    let assignments = [];
    let totalEntries = 0;
    let perPage = $pageState.tableData.perPage;
    let offset = $pageState.tableData.offset;
    let filters = $pageState.filters;
    let isLoading = false;
    async function fetchAssignments() {
        let restFilters = JSON.parse(JSON.stringify(filters));
        console.log(restFilters);
        isLoading = true;
        let res = await request('/employee-account-assignments', METHODS.GET, {
            'include': 'account,account.region,account.address',
            'limit': perPage,
            'offset': offset,
            'employee': relationId,
            ...restFilters
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            offset = result.meta.offset;
            assignments = result.data;
        }

        isLoading = false
    }

    async function onFilterChange(event) {
        offset = 0;
        const field = event.detail.field;
        let name = field.name;
        if (name === 'q' && field.value.length !== 0 && field.value.length < 4) {
            return;
        }

        filters[name] = field.value;
        if (!field.value) {
            delete filters[field.name];
        }

        await fetchAssignments();
    }

    let tooltipProfile = null;
    function onCellEnter(event) {
        tooltipProfile = showProfileToolTip(event, assignments, 'cell-avatar', '.wrapper-account-assignment .wrapper-profile-tooltip');
    }

    function onCellLeave() {
        tooltipProfile = null;
    }

    if (browser) {
        (async () => await fetchAssignments())();
    }
</script>

<div class="wrapper-account-assignment">
    <ProfileTooltip profile={tooltipProfile} active={Boolean(tooltipProfile)} />
    <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
    <TableData
        isLoading={isLoading}
        columns={columns}
        entries={assignments}
        perPage={perPage}
        offset={offset}
        totalEntries={totalEntries}
        on:cell-enter={onCellEnter}
        on:cell-leave={onCellLeave}
        uid="id"
    />
</div>

<style lang="css">

</style>
