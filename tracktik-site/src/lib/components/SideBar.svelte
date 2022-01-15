<script lang="ts">
    import { filterMenuItemsBySession, filterLinkProps } from '$lib/js/utils';
    import type { MenuItem } from '$lib/@types/MenuItem.type';
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import Link from '$components/ext/Link.svelte';
    import { page, session } from '$app/stores';
    import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
    import { pref } from '$lib/stores/cache';

    export let menuItems: MenuItem = [];

    menuItems = filterMenuItemsBySession(menuItems, $session);
    let hovers = [];

    let minimized = $pref.state.sideBar ?? false;
    let minimizeProps: LinkType = {
        icon: minimized ? faArrowLeft : faArrowRight,
        icon_hover: minimized ? faArrowRight : faArrowLeft
    };

    function toggleMinimize(event) {
        minimized = !minimized;
        $pref.state.sideBar = minimized;
        minimizeProps.icon = minimized ? faArrowLeft : faArrowRight;
        minimizeProps.icon_hover = minimized ? faArrowRight : faArrowLeft;
    }

</script>

<section class="side-bar" class:minimized>
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
                <li on:mouseover={() => hovers[item.href] = true} on:mouseout={() => hovers[item.href] = false}><Link
                    {...filterLinkProps(subItem)}
                    css="{$page.url.pathname.startsWith(subItem.href) ? 'active' : ''}"
                /></li>
            {/each}
            </ul>
            {/if}
            <Link  on:mouseover={() => hovers[item.href] = true} on:mouseout={() => hovers[item.href] = false}
                {...filterLinkProps(item)}
                css="{$page.url.pathname.startsWith(item.href) ? 'active' : ''}"
            />
        </li>
    {/each}
    </ul>
    <div class="minimize"><Link {...minimizeProps} on:link-click={toggleMinimize}/></div>
</section>

<style lang="scss">
    .side-bar {
        min-width: 100px;
        max-width: 100px;
        z-index: 200;

        .minimize {
            padding: .5em;
            display: block;
            text-align: center;
        }

        .logged-user {
            padding: 16px;
        }

        ul, li {
            list-style: none;
            padding: 0;
            margin: 0;
            display: block;
            position: relative;
        }

        li :global(a) {
            display: block;
            padding: 1em 0;
            text-align: center;
            font-size: .85em;
            text-decoration: none;
        }

        li :global(.icon) {
            font-size: 1.5em;
        }

        li :global(.text) {
            display: block;
        }

        .sub-items {
            position: absolute;
            margin-left: 99px;
            z-index: 500;
            display: none;
        }

        .sub-items.open {
            display: block;
        }

        .sub-items li :global(a) {
            font-size: .8em;
            padding: .5em 1em;
            white-space: nowrap;
            text-align: left;
        }
    }

    .side-bar.minimized {
        min-width: 40px;
        max-width: 40px;

        li :global(a) {
            padding: .65em .5em;
        }

        :global(.wrapper-link > .text) {
            display: none;
        }

        :global(.wrapper-link > .icon) {
            font-size: 1em;
        }

        .logged-user {
            padding: 0;
            display: flex;
        }

        .sub-items {
            margin-left: 39px;
        }

        .sub-items :global(.wrapper-link > .text) {
            display: initial;
        }
    }
</style>
