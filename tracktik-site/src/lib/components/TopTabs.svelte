<script lang="ts">
    import { filterMenuItemsBySession } from '$lib/js/utils';
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import Link from '$components/ext/Link.svelte';
    import { page, session } from '$app/stores';

    export let tabItems: LinkType = [];
    filterMenuItemsBySession(tabItems, $session);
</script>

<section class="sub-menu">
    <ul>
    {#each tabItems as item}
        <li><Link {...item} css="{$page.path.startsWith(item.href) ? 'active' : ''}" /></li>
    {/each}
    </ul>
</section>

<style lang="css">
    .sub-menu {
        width: 100%;
        z-index: 15;
    }

    .sub-menu ul,
    .sub-menu li {
        list-style: none;
        padding: 0;
        margin: 0;
        display: inline-block;
    }

    .sub-menu li :global(a) {
        display: inline-block;
        text-align: center;
        font-size: .85em;
        padding: 16px 24px;
        text-decoration: none;
    }

</style>
