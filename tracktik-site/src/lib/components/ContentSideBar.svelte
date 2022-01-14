<script lang="ts">
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import {createEventDispatcher} from "svelte";
    import Link from '$components/ext/Link.svelte';

    const dispatch = createEventDispatcher();
    function onLinkClick(event) {
        dispatch('item-click', event.detail.hyperlink);
    }

    type ContentSideBarItem = {
        label?: string;
        links: LinkType[];
    };

    export let items: ContentSideBarItem[] = [];
    export let itemSelected = null;
</script>

{#if items.length}
<div class="wrapper-content-side-bar"><div class="content-side-bar">
    <ul>
        {#each items as item}
            <li>
                {#if item.label}<i>{item.label}</i>{/if}
                <ul>{#each item.links as link}
                    <li><Link on:link-click={onLinkClick} {...link} css={link.id === itemSelected ? 'active' : ''}/></li>
                {/each}</ul>
            </li>
        {/each}
    </ul>
</div></div>
{/if}

<style lang="scss">
    .content-side-bar {
        padding-top: .5em;
        padding-left: .5em;
        ul, ul li {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        > ul {
            > li {
                margin-top: 1em;
                i {
                    font-weight: 400;
                }

                li {
                    font-size: .85em;

                    :global(a) {
                        padding: .25em .75em .25em .75em;
                        display: block;
                        white-space: nowrap;
                    }
                }
            }
        }

        > ul > li:nth-child(1) {
            margin-top: 0;
        }
    }
</style>
