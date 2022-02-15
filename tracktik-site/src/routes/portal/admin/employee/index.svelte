<script lang="ts">
    import EntityList from '$components/views/EntityList.svelte';
    import { pageState, getTableDataColumns, getFiltersFieldset, getCounters } from '$lib/stores/page/employee.list';
    import { session } from '$app/stores';
	import { t } from '$lib/i18n';
    import { SnackType, addSnack } from '$lib/stores/snack-bar';
    import { faUsersCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';
    import { faElevator } from '@fortawesome/free-solid-svg-icons/faElevator';
    import { modal as modalComponent, props as modalProps } from '$lib/stores/modal';
    import BulkChange from '$components/BulkChange.svelte';
    
    const counters = getCounters();
    const columns = getTableDataColumns($session);
    let filterFields = [];
    (async () => filterFields = await getFiltersFieldset($session))();

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

    let actions = [
        {id: 'add-employee', text: $t('page.employee.list.actions.add-employee'), icon: faUserPlus},
        {id: 'import-employees', text: $t('page.employee.list.actions.import-employees'), icon: faElevator},
        {id: 'bulk-action', text: $t('page.employee.list.actions.bulk-action'), icon: faUsersCog},
    ];

    function onActionClick(event) {
        if (event.detail.hyperlink.id === 'bulk-action') {
            let checkboxes = document.querySelectorAll('.table-data input[name="entityIds"]:checked');
            if (!checkboxes.length) {
                addSnack({text: $t('page.employee.list.warning-import'), type: SnackType.Warning});
                return;
            }

            $modalProps = {
                icon: faUsersCog,
                title: 'BulkChange',
            };
            $modalComponent = BulkChange;
        }
    }
</script>

<EntityList
    id='employee'
    restInclude='region,region.address,address,username'
    counters={counters}
    columns={columns}
    filterFields={filterFields}
    pageState={pageState}
    resetFilters={resetFilters}
    selectableRows={true}
    actions={actions}
    on:action-click={onActionClick}
/>

<style lang="css">
</style>
