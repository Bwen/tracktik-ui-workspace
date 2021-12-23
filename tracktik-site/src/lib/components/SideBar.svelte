<script lang="ts">
    import { filterItemsBySession } from '$lib/js/utils';
    import type { Link as LinkType } from '@type/Link.type';
    import Link from '$components/ext/Link.svelte';
    import { page, session } from '$app/stores';

    export let menuItems: LinkType = [];

    filterItemsBySession(menuItems, $session);
</script>

<section class="side-bar">
    {#if $session.auth && $session.auth && $session.auth.user}
    <div class="logged-user">
        <img src="{$session.auth.user.avatar}" alt="User Avatar" />
    </div>
    {/if}
    <ul>
    {#each menuItems as item}
        <li><Link {...item} css="{$page.path.startsWith(item.href) ? 'active' : ''}" /></li>
    {/each}
    </ul>
</section>

<style lang="css">
    .side-bar {
        width: 100px;
        z-index: 10;
    }

    .side-bar .logged-user {
        padding: 16px;
    }

    .side-bar ul,
    .side-bar li {
        list-style: none;
        padding: 0;
        margin: 0;
        display: block;
    }

    .side-bar li :global(a) {
        display: block;
        padding: 1em 0;
        text-align: center;
        font-size: .85em;
        text-decoration: none;
    }
    
    .side-bar li :global(.icon) {
        font-size: 1.5em;
    }

    .side-bar li :global(.text) {
        margin-top: 1em;
        display: block;
    }
</style>
