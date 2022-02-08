<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import {createEventDispatcher} from "svelte";
    import Link from '$components/ext/Link.svelte';
    import LoadingBar from '$components/ext/LoadingBar.svelte';
	import { t, number } from '$lib/i18n';

    const dispatch = createEventDispatcher();
    export let icon: IconDefinition = undefined;
    export let text: string = '';
    export let count: number = 0;
    export let isLoading = false;

    function onClick(event) {
        dispatch('link-click', event.detail);
    }
</script>

<div class="wrapper-stat-tile single-count"><Link on:link-click={onClick}>
    {#if icon}<Fa icon={icon} />{/if}
    <div>{$number(count)}</div>
    <label>{text}</label>
    <LoadingBar isLoading={isLoading} />
</Link></div>

<style lang="scss">

</style>