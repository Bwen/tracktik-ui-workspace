<script lang="ts">
    import LoadingBar from '$components/ext/LoadingBar.svelte';
    import Pagination from './Pagination.svelte';
    import {createEventDispatcher} from "svelte";
    import {getItemValue, replaceMarkers} from '$lib/js/utils';
    import type {ColumnDefinition} from '$lib/@types/TableData.type';
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import Checkbox from '$components/ext/form/Checkbox.svelte';
    import Link from '$components/ext/Link.svelte';

    const dispatch = createEventDispatcher();
    export let isLoading = false;
    export let entries = [];
    export let uid = '';
    export let perPage = 20;
    export let offset = 0;
    export let totalEntries = 0;
    export let columns: ColumnDefinition[] = [];
    export let selectableRows = false;
    export let actions: LinkType[] = [];

    let pageCurrent = 0;
    let page = 0;
    let pageEntries = [];
    $: {
        pageCurrent = Math.ceil(offset / perPage);
        pageEntries = getPageEntries(entries);
    }

    function getPageEntries(entries) {
        let startIndex = page * parseInt(perPage, 10);
        return entries.slice(startIndex, startIndex + parseInt(perPage, 10));
    }
    
    function onCellMouseEnter(event) {
        const row = event.target.closest('tr');
        const td = event.target.closest('td');

        dispatch('cell-enter', {target: td, row});
    }

    function onCellMouseLeave(event) {
        dispatch('cell-leave');
    }

    let enableActions = false;
    function onCheckAll(event) {
        const checkboxes = document.querySelectorAll('.table-data tbody input[type="checkbox"]');
        checkboxes.forEach(box => {
            box.checked = event.detail.checked;
            const row = box.closest('tr');
            if (event.detail.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
        });

        enableActions = event.detail.checked;
    }

    function onClickRow(event) {
        if (!selectableRows) {
            return;
        }

        const row = event.target.closest('tr');
        if (row) {
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (!event.target.type || 'checkbox' !== event.target.type) {
                checkbox.checked = !checkbox.checked;
            }

            if (checkbox.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
        }

        const checkboxes = event.target.closest('tbody').querySelectorAll('input[type="checkbox"]:checked');
        enableActions = checkboxes.length > 0 ? true : false;
    }

    function onActionClick(event) {
        dispatch('action-click', {...event.detail});
    }

    function onPerPageChange(event) {
        dispatch('per-page-change', {perPage: event.detail.perPage});
    }

    function onPageChange(event) {
        dispatch('page-change', {pageNumber: event.detail.pageNumber});
    }

    function getComponentProps(column, entry) {
        const prop = {};
        if (column.component && column.componentProps) {
            for (let i=0; i < column.componentProps.length; i++) {
                let propInfo = column.componentProps[i];
                if (Object.hasOwnProperty.call(propInfo, 'raw')) {
                    prop[propInfo.name] = replaceMarkers(propInfo.raw, entry);
                } else {
                    prop[propInfo.name] = getItemValue(propInfo.key, entry);
                }
            }
        }

        return prop;
    }
</script>

<div class="wrapper-table-data">
    {#if selectableRows && actions.length}<ul class="actions">
        {#each actions as action}
        <li><Link {...action} on:link-click={onActionClick} /></li>
        {/each}
    </ul>{/if}
    <table class="table-data" class:selectable-rows={selectableRows}>
        <thead>
            <tr>
                {#if selectableRows}<th class='cell-checkbox'><Checkbox name="checkAll" value="0" on:input={onCheckAll} /></th>{/if}
            {#each columns as column}
                <th class="{column.css || ''}">{column.text || ''}</th>
            {/each}
            </tr>
            <tr class="loading-bar">
                <th colspan="{columns.length + (selectableRows ? 1 : 0)}"><LoadingBar isLoading={isLoading} /></th>
            </tr>
        </thead>

        <tbody>
        {#each pageEntries as entry, i}
            <tr id="row-{ uid ? entry[uid] : i}" on:click={onClickRow}>
                {#if selectableRows}<td class='cell-checkbox'><Checkbox name="entityIds" value="{ uid ? entry[uid] : i}" /></td>{/if}
                {#each columns as column}
                <td class="{column.css || ''}" on:mouseenter={onCellMouseEnter} on:mouseleave={onCellMouseLeave}>
                    {#if column.parse}
                        {column.parse(getItemValue(column.key, entry))}
                    {:else if column.component}
                        <svelte:component this={column.component} {...getComponentProps(column, entry)}/>
                    {:else}
                        {getItemValue(column.key, entry)}
                    {/if}
                </td>
                {/each}
            </tr>
        {/each}

        {#if pageEntries.length === 0}
            <tr><td colspan="{columns.length + (selectableRows ? 1 : 0)}" class="no-result">No Entries found</td></tr>
        {/if}
        </tbody>
    </table>
    <Pagination 
        showTotal={true}
        showPerPage={true}
        pageCurrent={pageCurrent}
        perPage={perPage}
        total={totalEntries}
        on:page-change={onPageChange}
        on:per-page-change={onPerPageChange}
    />
</div>

<style lang="css">
    .actions,
    .actions li {
        list-style: none;
        margin:0;
        padding:0;
        display: flex;
    }
    
    .actions li :global(a) {
        display: block;
        padding: .85em 1.15em;
    }

    .actions li :global(svg) {
        font-size: 1.35em;
    }

    .table-data {
        width: 100%;
    }

    .table-data td {
        overflow: hidden;
    }

    .table-data tr.loading-bar :global(.wrapper-loading),
    .table-data tr.loading-bar th {
        margin: 0;
        padding: 0;
    }
    
    .wrapper-table-data :global(.pagination) {
        margin-left: auto;
        margin-right: 1em;
    }
</style>
