<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import type { SelectOptions } from '$lib/@types/form.type';
    import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
    import { parseAttributes } from '$lib/js/attributeProps';
    import Link from '$lib/components/Link.svelte';
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    export let value = '';
    export let name = '';
    export let options: SelectOptions[] = [];
    export let id = '';
    export let css = '';
    export let disabled = false;
    export let placeholder = '';
    export let data = {};
    let selectedValue;
    let selectWrapper;
    let formInput;
    let commonAttributes: any = {};
    $: {
        commonAttributes = parseAttributes({id, css, data});
        setValue(value);
    }
 
    onMount(() => {
        setValue(value);
    });

    function setValue(value: string) {
        options.forEach(option => {
            if (value == option.value && selectedValue) {
                selectedValue.innerText = option.text;
            }
        })
    }

    function toggleOptions() {
        selectWrapper.classList.toggle('open');
    }

    /**
     * mouse-down occurs before the input's blur
     * @param event
     */
    function onMouseDown (event) {
        const option = event.target.closest('a');
        selectedValue.innerText = option.querySelector('.text').innerText;
        formInput.value = option.getAttribute('data-value');
        dispatch('input', formInput.value);
        selectWrapper.classList.remove('open');
    }
</script>

<div class="wrapper-select" bind:this={selectWrapper}>
    <div {...commonAttributes}>
        <input type="hidden" name="{name}" value="{value}" bind:this={formInput}/>
        <span class="selected-arrow" on:click={toggleOptions}><Fa icon={faAngleUp} /></span>
        <div class="input-select" bind:this={selectedValue} on:click={toggleOptions}>Enter password</div>
        <ul>
        {#each options as option, i}
            <li>
                <Link
                    on:mousedown={onMouseDown}
                    data={{value: option.value}}
                    icon={option.icon}
                >{option.text}</Link>
            </li>
        {/each}
        </ul>
    </div>
</div>


<style lang="css">
    .wrapper-select,
    .wrapper-select div {
        display: inline-block;
        position: relative;
    }
    .wrapper-select ul,
    .wrapper-select li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .wrapper-select ul {
        opacity: 0;
        height: 1px;
        overflow: hidden;
        position: absolute;
        display: block;
        background-color: #EEE;
        width: 12.2em;
    }
    .wrapper-select.open :global(ul) {
        opacity: 100%;
        height: 10em;
        z-index: 100;
        overflow-x: hidden;
    }
    .wrapper-select ul :global(a) {
        text-decoration: none;
        padding: .35em;
        display: block;
    }
    .wrapper-select ul :global(a:hover) {
        background-color: #FFF;
    }

    .wrapper-select ul :global(.fa) {
        position: absolute;
        margin: 8px;
    }
    .wrapper-select.open ul :global(.fa) {
        transform: rotate(90deg);
    }

    .wrapper-select .selectedIcon,
    .wrapper-select .selected-arrow {
        z-index: 1;
        position: absolute;
        top: 0;
        padding: 4px 8px;
    }
    .wrapper-select .selected-arrow {
        right: 0;
    }
    .wrapper-select.open .selected-arrow {
        transition: transform .1s ease-in;
        transform: rotate(180deg);
        right: 0;
    }
    .wrapper-select .selectedIcon {
        padding: 4px;
        left: 1.75em;
    }
    .wrapper-select .active {
        display: block;
    }
    .wrapper-select .selected-reset :global(.fa) {
        margin: 8px;
        font-size: initial;
    }
    .wrapper-select :global(input[type="text"]) {
        padding-left: 3.5em;
        padding-right: 1.5em;
    }

    .wrapper-select .selected-arrow,
    .wrapper-select .input-select {
        cursor: pointer;
    }

    .wrapper-select .input-select {
        width: 13.85em;
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        background-color: white;
        background-color: -moz-field;
        border: 1px solid darkgray;
        font: -moz-field;
        font: -webkit-small-control;
        padding: 6px 4px;
    }
</style>
