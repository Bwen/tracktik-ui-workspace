<script lang="ts">
	import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import { browser } from '$app/env';
    import Form from '$lib/components/ext/form/Form.svelte';
    import { session } from '$app/stores';
    import { pageState, getTableDataColumns, getFiltersFieldset } from '$lib/stores/page/zone.list';
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

    let clients = [];
    let totalEntries = 0;
    let perPage = $pageState.tableData.perPage;
    let offset = $pageState.tableData.offset;
    let filters = $pageState.filters;
    async function fetchClients() {
        $pageState.filters = filters;
        let restFilters = JSON.parse(JSON.stringify(filters));

        isLoading = true;
        let res = await request('/zones', METHODS.GET, {
            'include': 'region,region.address,address',
            'limit': perPage,
            'offset': offset,
            ...restFilters,
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            offset = result.meta.offset;
            clients = result.data;
        }

        isLoading= false;
    }

    function resetFilters() {
        filterFields[0].fields[0].value = '';
        filterFields[0].fields[1].value = 'ACTIVE';
        filterFields[0].fields[2].value = '';
        filterFields[1].fields[0].checked = false;
        filterFields[1].fields[1].checked = false;
        filterFields = filterFields;
        
        filters['status'] = 'ACTIVE';
        delete filters['q'];
        delete filters['region'];
        delete filters['clockedIn'];
        delete filters['inactive'];
    }

    async function onPerPageChange(event) {
        perPage = event.detail.perPage;
        $pageState.tableData.perPage = perPage;
        await fetchClients();
    }

    async function onPageChange(event) {
        offset = event.detail.pageNumber * perPage;
        $pageState.tableData.offset = offset;
        await fetchClients();
    }

    async function onFilterChange(event) {
        offset = 0;
        const field = event.detail.field;
        let name = field.name;
        if (name === 'q' && field.value.length !== 0 && field.value.length < 4) {
            return;
        }

        filters[name] = field.value;
        if (!field.value || (field.type === FieldType.CHECKBOX && !field.checked)) {
            delete filters[field.name];
        }

        await fetchClients();
    }

    let isLoadingActive = false;
    let countActive = 0;
    async function fetchActive() {
        isLoadingActive = true;
        countActive = await fetchCount({});
        isLoadingActive = false;
    }

    function onClickActive() {
        resetFilters();
        fetchClients();
    }

    let isLoadingClockIn = false;
    let countClockIn = 0;
    async function fetchClockIn() {
        isLoadingClockIn = true;
        countClockIn = await fetchCount({clockedIn: true});
        isLoadingClockIn = false;
    }

    function onClickClockIn() {
        resetFilters();
        filterFields[1].fields[0].checked = true;
        filters['clockedIn'] = true;

        fetchClients();
    }

    let isLoadingInactive = false;
    let countInactive = 0;
    async function fetchInactive() {
        isLoadingInactive = true;
        countInactive = await fetchCount({inactive: true});
        isLoadingInactive = false;
    }

    function onClickInactive() {
        resetFilters();
        filterFields[1].fields[1].checked = true;
        filters['inactive'] = true;

        fetchClients();
    }

    async function fetchCount(filters) {
        let res = await request('/zones', METHODS.GET, {status: 'ACTIVE', include: 'id', limit: 1, ...filters});
        if (!res.ok) {
            return 0;
        }
        
        let result = await res.json();
        return result.meta.count;
    }

    if (browser) {
        session.subscribe(async () => {
            fetchClients();
            fetchActive();
            //fetchInactive();
            //fetchClockIn();
        });

        (async () => {
            fetchClients();
            fetchActive();
            //fetchInactive();
            //fetchClockIn();
        })();
    }
</script>

<div class="wrapper-content">
    <div class="stats">
        <TableDataCountTile count={totalEntries} />
        <SingleCountTile icon={faUsers} on:link-click={onClickActive} count={countActive} isLoading={isLoadingActive} text="Active Zones" />
        <SingleCountTile icon={faStopwatch} on:link-click={onClickInactive} count={countInactive} isLoading={isLoadingInactive} text="Inactive Zones" />
        <SingleCountTile icon={faUserClock} on:link-click={onClickClockIn} count={countClockIn} isLoading={isLoadingClockIn} text="Clocked-In Zones" />
    </div>
    <div class="content"><div class="page-zone-list">
        <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
        <TableData 
            columns={columns}
            entries={clients}
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
    .wrapper-content {
        display: flex;
        flex-direction: column;
    }

    .page-zone-list :global(.filters form) {
        display: flex;
        flex-direction: column;
    }

    .page-zone-list :global(.filters .wrapper-checkbox) {
        float: left;
    }

    .page-zone-list :global(td) {
        position: relative;
    }

    .page-zone-list .filters :global(form),
    .page-zone-list .filters :global(fieldset) {
        display: flex;
    }

    .page-zone-list :global(.wrapper-table-data) {
        font-size: .75em;
    }

    .page-zone-list :global(.cell-checkbox) {
        width: 1%;
    }

    .page-zone-list :global(.cell-uid) {
        width: 5%;
    }

    .page-zone-list :global(.cell-phone) {
        width: 10%;
    }

    .page-zone-list :global(.cell-region) {
        width: 15%;
    }

    .page-zone-list :global(td.cell-phone) {
        text-align: center;
    }
</style>
