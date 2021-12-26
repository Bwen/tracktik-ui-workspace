<script lang="ts">
    import { pref } from '$lib/stores/cache';
	import { goto } from '$app/navigation';
    import Fa from 'svelte-fa/src/fa.svelte';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
    import { createEventDispatcher } from "svelte";
    import { parseAttributes } from '$lib/js/attributeProps';
    const dispatch = createEventDispatcher();
    function onLinkClick(event) {
        event.stopPropagation();

        const a = event.target.closest('a');
        dispatch('link-click', {hyperlink: a});

        // if we are debuging SSR dont use `goto`, let page reload completely
        if ($pref.debug.ssr) {
            return;
        }

        if (a.href) {
            event.preventDefault();
            goto(a.href);
            return;
        }
    }

    export let icon: IconDefinition = null;
    export let icon_hover: IconDefinition = null;
    export let unicode: string = null;
    export let subtext = '';
    export let text = '';
    export let href = '';
    export let id = '';
    export let css = '';
    export let title = '';
    export let data = {};
    let commonAttributes: any = {};
    $: commonAttributes = parseAttributes({title, href, id, css, data});
</script>

<a {...commonAttributes} on:click="{onLinkClick}" on:mousedown on:mouseover on:mouseout>
    <span class="wrapper-link">
    {#if icon}
        <span class="icon"><Fa class="{icon_hover ? 'on' : ''}" {icon} />{#if icon_hover}<Fa class="off" icon={icon_hover} />{/if}</span>
    {:else if unicode}
        <span class="icon"><span class="unicode">{unicode}</span></span>
    {/if}
    {#if $$slots.default || text}
        <span class="text">
            {#if $$slots.default}<slot></slot>{:else if text}{text}{/if}{#if subtext}<sup>{subtext}</sup>{/if}
            {#if commonAttributes.href && commonAttributes.href.match(/^http/)}<sup><Fa icon={faExternalLinkAlt} /></sup>{/if}
        </span>
    {/if}
    </span>
</a>

<style lang="css">
    a {
        cursor: pointer;
    }
    .icon {
        display: inline-block;
        transition: transform .1s ease-in-out;
    }
    .icon :global(.off) {
        display: none;
    }
    a:hover .icon :global(.off) {
        display: inline-block;
    }
    a:hover .icon :global(.on) {
        display: none;
    }
</style>
