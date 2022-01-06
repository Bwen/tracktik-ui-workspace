<script lang="ts">
    import Link from '$components/ext/Link.svelte';

    export let items = [];
</script>

{#if items.length}
<div class="wrapper-side-bar-content"><div class="side-bar-content">
    <ul>
        {#each items as item}
            <li>
                {#if item.label}<i>{item.label}</i>{/if}
                <ul>{#each item.links as link}
                    <li><Link>{link.text}</Link></li>
                {/each}</ul>
            </li>
        {/each}
    </ul>
</div></div>
{/if}

<style lang="scss">
    .side-bar-content {
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
