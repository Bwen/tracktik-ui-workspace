<script lang="ts">
    import { browser } from '$app/env';
    import { session } from '$app/stores';
    import { showProfileToolTip } from '$lib/js/utils';
    import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import Form from '$lib/components/ext/form/Form.svelte';
    import ProfileTooltip from '$lib/components/ProfileTooltip.svelte';
    import TableDataCountTile from '$components/stats/TableDataCountTile.svelte';
    import SingleCountTile from '$components/stats/SingleCountTile.svelte';
    import { FieldType } from '$lib/js/form';

    export let id;
    export let pageState;
    export let columns;
    export let filterFields;
    export let counters = {};
    export let restInclude = '';
    export let resetFilters = () => {};

    let isLoading = false;
    let entities = [];
    let totalEntries = 0;
    async function fetchEntries() {
        let restFilters = JSON.parse(JSON.stringify($pageState.filters));

        let forAllAccountAssignments = $pageState.filters.forAllAccountAssignments;
        if (forAllAccountAssignments) {
            delete restFilters['forAllAccountAssignments'];

            if (forAllAccountAssignments.zone && forAllAccountAssignments.department) {
                restFilters['forAllAccountAssignments'] = `${forAllAccountAssignments.zone},${forAllAccountAssignments.department}`;
            } else if (forAllAccountAssignments.zone) {
                restFilters['forAllAccountAssignments'] = forAllAccountAssignments.zone;
            } else if (forAllAccountAssignments.department) {
                restFilters['forAllAccountAssignments'] = forAllAccountAssignments.department;
            }
        }

        isLoading = true;
        let res = await request(`/${id}s`, METHODS.GET, {
            'include': restInclude,
            'limit': $pageState.tableData.perPage,
            'offset': $pageState.tableData.offset,
            ...restFilters,
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            $pageState.tableData.offset = result.meta.offset;
            entities = result.data;
        }

        isLoading= false;
    }

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
        let res = await request(`/${id}s`, METHODS.GET, {include: 'id', limit: 1, ...filters});
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
        tooltipProfile = showProfileToolTip(event, entities, 'cell-avatar', `.page-${id}-list .wrapper-profile-tooltip`);
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
    <div class="content"><div class="page-{id}-list">
        <ProfileTooltip profile={tooltipProfile} active={Boolean(tooltipProfile)} />
        <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
        <TableData 
            columns={columns}
            entries={entities}
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

    div[class^='page-'][class*='-list']  :global(.filters form) {
        display: flex;
        flex-direction: column;
    }

    div[class^='page-'][class*='-list'] .filters :global(.wrapper-checkbox) {
        float: left;
    }

    div[class^='page-'][class*='-list'] :global(.wrapper-field) {
        padding-bottom: 0;
    }

    div[class^='page-'][class*='-list'] :global(.cell-checkbox) {
        width: 1%;
    }

    div[class^='page-'][class*='-list'] :global(.cell-uid) {
        width: 5%;
    }

    div[class^='page-'][class*='-list'] :global(.cell-phone) {
        width: 10%;
        text-align: center;
    }

    div[class^='page-'][class*='-list'] :global(.cell-region) {
        width: 15%;
    }
</style>
