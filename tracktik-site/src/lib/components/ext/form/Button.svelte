<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import { parseAttributes } from "$lib/js/attributeProps";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    
    export let icon: IconDefinition = null;
    export let value: string | number = '';
    export let name = '';
    export let placeholder = '';
    export let id = '';
    export let css = '';
    export let disabled = '';
    export let data = {};
    let commonAttributes = {};
    $: commonAttributes = parseAttributes({id, disabled, css, data, placeholder});
    
    function onClick(event) {
        dispatch('input', value);
    }
</script>

<div class="wrapper-button">
    <button {...commonAttributes} on:click={onClick}>{name}</button>
</div>

<style lang="css">
    .wrapper-button {
        display: inline-block;
        font-size: .8em;
    }
</style>