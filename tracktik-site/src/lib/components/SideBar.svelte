<script lang="ts">
    import { filterItemsBySession } from '$lib/js/utils';
    import type { MenuItem } from '@types/MenuItem.type';
    import Link from '$components/ext/Link.svelte';
    import { page, session } from '$app/stores';

    export let menuItems: MenuItem = [];

    filterItemsBySession(menuItems, $session);
    let hovers = [];
</script>

<section class="side-bar">
    {#if $session.auth && $session.auth && $session.auth.user}
    <div class="logged-user">
        <img src="{$session.auth.user.avatar}" alt="User Avatar" />
    </div>
    {/if}
    <ul>
    {#each menuItems as item}
        <li>
            {#if item.subItems}
            <ul class="sub-items" class:open={hovers[item.href]}>
            {#each item.subItems as subItem}
                <li><Link 
                    on:mouseover={() => hovers[item.href] = true}
                    on:mouseout={() => hovers[item.href] = false}
                    {...subItem} 
                    css="{$page.path.startsWith(subItem.href) ? 'active' : ''}" 
                /></li>
            {/each}
            </ul>
            {/if}
            <Link 
                on:mouseover={() => hovers[item.href] = true}
                on:mouseout={() => hovers[item.href] = false}
                {...item} 
                css="{$page.path.startsWith(item.href) ? 'active' : ''}" 
            />
        </li>
    {/each}
    </ul>
</section>

<style lang="css">
    .side-bar {
        min-width: 100px;
        max-width: 100px;
        z-index: 200;
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
        position: relative;
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
        display: block;
    }

    .side-bar .sub-items {
        position: absolute;
        margin-left: 100px;
        z-index: 500;
        display: none;
    }

    .side-bar .sub-items.open {
        display: block;
    }

    .side-bar .sub-items li :global(a) {
        font-size: .8em;
        padding: .5em 1em;
        white-space: nowrap;
        text-align: left;
    }
</style>
