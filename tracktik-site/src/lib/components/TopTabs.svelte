<script lang="ts">
    import { filterMenuItemsBySession } from '$lib/js/utils';
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import Link from '$components/ext/Link.svelte';
    import { page, session } from '$app/stores';

    export let tabItems: LinkType = [];
    filterMenuItemsBySession(tabItems, $session);
</script>

<section class="top-tabs">
    <ul>
    {#each tabItems as item}
        <li><Link {...item} css="{$page.path.startsWith(item.href) ? 'active' : ''}" /></li>
    {/each}
    </ul>
</section>

<style lang="css">
    .top-tabs {
        width: 100%;
        z-index: 15;
    }

    .top-tabs ul,
    .top-tabs li {
        list-style: none;
        padding: 0;
        margin: 0;
        display: inline-block;
    }

    .top-tabs li :global(a) {
        display: inline-block;
        text-align: center;
        font-size: .85em;
        padding: 16px 24px;
        text-decoration: none;
    }

</style>
