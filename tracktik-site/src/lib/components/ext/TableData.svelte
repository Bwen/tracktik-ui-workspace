<script lang="ts">
    import LoadingBar from '$components/ext/LoadingBar.svelte';
    import Pagination from './Pagination.svelte';
    import {createEventDispatcher} from "svelte";
    import { getItemValue, replaceMarkers} from '$lib/js/utils';

    const dispatch = createEventDispatcher();
    type CompProp = {
        name: string;
        key: string;
        raw: string;
    } & ({name: string; key: string} | {name: string; raw: string});

    type ColumnDefinition = {
        key?: string;
        component?: any;
        componentProps?: CompProp[];
        text?: string;
        css?: string;
        parse?: (value: string) => string;
    };

    export let isLoading = false;
    export let entries = [];
    export let uid = '';
    export let perPage = 20;
    export let offset = 0;
    export let totalEntries = 0;
    export let columns: ColumnDefinition[] = [];

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
    
    function onClickRow(event) {
        let row = event.target.closest('tr');
        if (event.target.type && 'checkbox' === event.target.type) {
            if (event.target.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }

            return;
        }

        let checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;

            if (checkbox.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
        }

        dispatch('click-row', {target: event.target, row});
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
    <table class="table-data">
        <thead>
            <tr>
            {#each columns as column}
                <th class="{column.css || ''}">{column.text || ''}</th>
            {/each}
            </tr>
            <tr class="loading-bar">
                <th colspan="{columns.length}"><LoadingBar isLoading={isLoading} /></th>
            </tr>
        </thead>

        <tbody>
        {#each pageEntries as entry, i}
            <tr id="row-{ uid ? entry[uid] : i}" on:click={onClickRow}>
                {#each columns as column}
                <td class="{column.css || ''}">
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
            <tr><td colspan="{columns.length}" class="no-result">No Entries found</td></tr>
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
