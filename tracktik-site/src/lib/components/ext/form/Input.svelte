<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import { parseAttributes } from '$lib/js/attributeProps';
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let icon: IconDefinition = null;
    export let value: string | number = '';
    export let name = '';
    export let type = 'text';
    export let placeholder = '';
    export let id = '';
    export let css = '';
    export let disabled = '';
    export let data = {};
    let commonAttributes = {};
    $: commonAttributes = parseAttributes({id, disabled, css, data, name, value, placeholder});
    let input;
    export function setValue(value: string): void {
        input.value = value;
    }
    export function setPlaceholder(value: string): void {
        input.placeholder = value;
    }
    export function getValue(): string {
        return input.value;
    }
    export function disable(disable: boolean): void {
        input.disabled = disable;
    }
    export function blur() {
        input.blur();
    }

    function onKeyup(event) {
        dispatch('keyup', event.target.value);
    }

    function onInput(event) {
        dispatch('input', event.target.value);
    }
</script>

<div class="wrapper-input">
    {#if icon}<span class="icon"><Fa {icon} /></span>{/if}
    <input
        bind:this={input}
        type="{type}"
        on:input={onInput}
        on:focus
        on:blur
        on:keyup={onKeyup}
        {...commonAttributes}
    />
</div>

<style lang="css">
    .wrapper-input {
        display: inline-block;
        position: relative;
    }

    .wrapper-input .icon {
        position: absolute;
        margin: 8px;
    }
    .wrapper-input .icon + input[type="text"] {
        padding-left: 2em;
    }
</style>

