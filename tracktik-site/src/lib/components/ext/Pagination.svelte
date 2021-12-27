<script lang="ts">
    import { faAngleDoubleRight, faAngleRight, faAngleDoubleLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
    import Link from './Link.svelte';
    import Select from '$components/ext/form/Select.svelte';
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let total = 1;
    export let perPage = 15;
    export let maxPagesDisplay = 7;
    export let showTotal = false;
    export let showPerPage = false;

    let perPageOptions = [
        {value: 15, text: 15},
        {value: 25, text: 25},
        {value: 50, text: 50},
        {value: 100, text: 100},
    ];

    export let pageCurrent = 0;
    let currentAmount = 0;
    let totalPages = 0;
    let pagesDisplay = [];
    $: {
        pagesDisplay = [];
        totalPages = Math.ceil(total / perPage);
        let middlePageThreshold = Math.floor(maxPagesDisplay / 2);
        for (let i=0; i < totalPages; i++) {
            if (pagesDisplay.length >= maxPagesDisplay) {
                break;
            }

            // Current page should be displayed in the middle, and the last page should always have mxPagesDisplay
            if (i < (pageCurrent - middlePageThreshold) && i < (totalPages - maxPagesDisplay)) {
                continue;
            }

            pagesDisplay.push(i);
        }


        currentAmount = perPage * (pageCurrent ? pageCurrent : 1);
        if (currentAmount > total) {
            currentAmount = total;
        }
    }

    function onPerPageChange(event) {
        dispatch('per-page-change', {perPage: event.detail});
    }

    function onLinkClick(event) {
        let pageNumber = parseInt(event.detail.hyperlink.getAttribute('data-page'), 10);
        if (isNaN(pageNumber)) {
            let pageArrow = event.detail.hyperlink.getAttribute('data-page');
            let pageLast = totalPages - 1 ;

            switch (pageArrow) {
                case 'previous':
                    pageNumber = isNaN(pageCurrent) || 0 === pageCurrent ? 0 : pageCurrent - 1;
                    break;
                case 'next':
                    pageNumber = isNaN(pageCurrent) || pageLast <= pageCurrent ? pageLast : pageCurrent + 1;
                    break;
                case 'first':
                    pageNumber = 0;
                    break;
                case 'last':
                    pageNumber = pageLast;
                    break;
                default:
                    console.warn('Pagination component could not parse the arrows correctly!');
                    break;
            }
        }

        pageCurrent = pageNumber;
        dispatch('page-change', {pageNumber});
    }
</script>

<div class="wrapper-pagination">
    {#if showTotal}<div class="total">{currentAmount} of {total}</div>{/if}
    {#if showPerPage}<div class="per-page"><Select on:input={onPerPageChange} options={perPageOptions} value={perPage} /></div>{/if}
    <section class="pagination">
        {#if totalPages > 1}
        <Link icon={faAngleDoubleLeft} on:link-click={onLinkClick} data="{{page: 'first'}}" />
        <Link icon={faAngleLeft} on:link-click={onLinkClick} data="{{page: 'previous'}}" />
        {/if}

        {#each pagesDisplay as page}
            <Link text="{page + 1}" on:link-click={onLinkClick} data="{{page}}" css="{pageCurrent === page ? 'current' : ''}" />
        {/each}

        {#if totalPages > 1}
        <Link icon={faAngleRight} on:link-click={onLinkClick} data="{{page: 'next'}}" />
        <Link icon={faAngleDoubleRight} on:link-click={onLinkClick} data="{{page: 'last'}}" />
        {/if}
    </section>
</div>

<style lang="css">
    .wrapper-pagination {
        display: flex;
        flex-flow: row;
        width: 100%;
        padding: .5em;
        line-height: 2.6em;
    }

    .wrapper-pagination > * {
        margin-left: .65em;
    }

    .wrapper-pagination :global(.input-select) {
        width: 3.5em;
        padding: .5em;
        height: 1em;
        line-height: 1.25em;
    }

    .wrapper-pagination :global(.selected-arrow) {
        width: .5em;
        height: .8em;
        line-height: .8em;
        padding: .5em;
        margin-top: 3px;
    }

    .wrapper-pagination :global(.wrapper-select .outclick-wrapper > ul) {
        height: 7.2em;
        min-width: 4.5em;
        text-align: right;
        margin-top: -5px;
    }

    .wrapper-pagination :global(.wrapper-select .outclick-wrapper li) {
        line-height: 1em;
    }

    .pagination :global(a) {
        text-decoration: none;
        width: 2em;
    }

    .pagination :global(.current) {
        font-weight: bolder;
    }
</style>
