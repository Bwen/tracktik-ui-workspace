<script lang="ts">
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
	import Fa from 'svelte-fa/src/fa.svelte';
    import { faAngleUp, faInfoCircle, faExclamationTriangle, faSkull } from '@fortawesome/free-solid-svg-icons';

    type AccordingType = {
        open?: boolean,
        icon?: IconDefinition,
        style?: string,
        label?: string,
        content: string,
    };

    export let items: AccordingType[] = [];

    function getIcon(style: string) {
        switch (style) {
            case 'info':
                return faInfoCircle;
            case 'warn':
                return faExclamationTriangle;
            case 'error':
                return faSkull;
            default:
            case 'normal':
                return undefined;
        }
    }
</script>

<div class="accordion">
    <ul>
    {#each items as item}
        <li class="{item.style}">
            {#if getIcon(item.style)}<div class="icon"><Fa icon={getIcon(item.style)} /></div>{/if}
            {#if item.label}<div class="label">{item.label}<Fa icon={faAngleUp} /></div>{/if}
            <div class="content">{item.content}</div>
        </li>
    {/each}
    </ul>
</div>

<style lang="css">
    .accordion {
        text-align: left;
    }

    .accordion ul, 
    .accordion li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .accordion li {
        display: block;
        position: relative;
        border: 1px solid grey;
    }

    .accordion .icon {
        position: absolute;
        margin-left: .5em;
        margin-top: .5em;
    }

    .accordion .content {
        border: 1px solid blue;
    }

    .accordion .label {
        padding: .5em;
        padding-left: 2em;
        border: 1px solid red;
    }

    .accordion .label :global(svg) {
        float: right;
        margin-right: .5em;
        margin-top: .25em;
    }
</style>