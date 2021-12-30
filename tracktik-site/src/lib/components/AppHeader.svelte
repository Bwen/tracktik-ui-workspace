<script lang="ts">
    import { page } from '$app/stores';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import {createEventDispatcher} from "svelte";
    import Link from '$components/ext/Link.svelte';

    let menuBarItem = {icon: faBars, id: 'menu-bars'};
    export let logoItem: {img: string, url: string, icon: IconDefinition} = null;
    export let centerItems: LinkType[] = [];
    export let rightItems: LinkType[] = [];

    const dispatch = createEventDispatcher();
    function onItemClick(event) {
        if (!event.detail.hyperlink.id) {
            return;
        }

        if (event.detail.hyperlink.id === 'menu-bars') {
            document.querySelector('.app-header .center').classList.toggle('mobile-hover');
            return;
        }

        dispatch('item-click', {hyperlink: event.detail.hyperlink});
    }
</script>

<header class="wrapper-app-header">
    <section class="app-header">
    {#if logoItem && logoItem.img}
        <section class="left">
            <img src="{logoItem.img}" alt="logo" />
        </section>
    {:else if logoItem && logoItem.icon}
        <section class="left">
            <Link {...logoItem} />
        </section>
    {/if}

    {#if centerItems.length}
        <nav class="center">
            <div class="menu-bars"><Link {...menuBarItem} on:link-click={onItemClick} /></div>
            <div class="center-items">{#if centerItems.length}{#each centerItems as item}<Link {...item} on:link-click={onItemClick} css={$page.path === item.href ? 'active' : ''} />{/each}{/if}</div>
        </nav>
    {/if}

    {#if rightItems.length}
        <section class="right">
            {#each rightItems as item}<Link {...item} on:link-click={onItemClick} />{/each}
        </section>
    {/if}
    </section>
</header>

<style lang="scss">
    .wrapper-app-header {
        position: relative;

        .app-header {
            margin: 0 auto;
            display: flex;
            flex-flow: row;

            :global(a) {
                position: relative;
                cursor: pointer;
                color: inherit;
                text-decoration: none;
            }

            :global(.icon) {
                padding: .25em .45em;
                font-size: 1.75em;
                vertical-align: top;
                max-width: 1.90em;
            }

            :global(a),
            :global(.wrapper-link) {
                display: inline-block;
                vertical-align: top;
            }

            :global(.text) {
                display: inline-block;
                position: relative;
                line-height: 3.5em;
                padding: 0 1em;
            }

            :global(sup) {
                font-style: italic;
                font-size: .65em;
                text-align: center;
                line-height: initial;
                display: block;
                position: absolute;
                bottom: .65em;
                left: 0;
                width: 100%;
            }

            .right {
                flex: auto;
                text-align: right;
            }

            .left {
                margin-left: var(--spacing);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .left img {
                max-height: 38px;
                padding: 6px;
            }

            .menu-bars {
                display: none;
            }
        }
    }

</style>
