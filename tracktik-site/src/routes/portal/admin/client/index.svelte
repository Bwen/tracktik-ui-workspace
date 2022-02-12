<script lang="ts">
    import EntityList from '$components/views/EntityList.svelte';
    import { pageState, getTableDataColumns, getFiltersFieldset, getCounters } from '$lib/stores/page/client.list';
    import { session } from '$app/stores';
    
    const counters = getCounters();
    const columns = getTableDataColumns($session);
    let filterFields = [];
    (async () => filterFields = await getFiltersFieldset($session))();

    function resetFilters() {
        filterFields[0].fields[0].value = '';
        filterFields[0].fields[1].value = '';
        filterFields[0].fields[2].value = 'ACTIVE';
        filterFields[0].fields[3].value = '';
        filterFields[1].fields[0].checked = false;
        filterFields[1].fields[1].checked = false;
        filterFields = filterFields;
        
        $pageState.filters['status'] = 'ACTIVE';
        delete $pageState.filters['zone'];
        delete $pageState.filters['q'];
        delete $pageState.filters['region'];
        delete $pageState.filters['clockedIn'];
        delete $pageState.filters['inactive'];
    }
</script>

<EntityList
    id='client'
    restInclude='region,region.address,address'
    counters={counters}
    columns={columns}
    filterFields={filterFields}
    pageState={pageState}
    resetFilters={resetFilters}
/>

<style lang="css">
</style>
