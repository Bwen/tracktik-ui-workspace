<script lang="ts">
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import Link from '$components/ext/Link.svelte';
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let items: LinkType[] = [];
    function onLinkClick(event) {
        dispatch('item-click', event.detail.hyperlink);
    }

</script>

<div class="wrapper-content-toolbar"><div class="content-toolbar">
    <ul>
    {#each items as link}
        <li><Link on:link-click={onLinkClick} {...link} /></li>
    {/each}
    </ul>
</div></div>

<style lang="scss">
    .content-toolbar {
        ul, li {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        ul {
            display: flex;
            li :global(a) {
                padding: .8em .65em;
                display: block;
            }
        }
    }
</style>