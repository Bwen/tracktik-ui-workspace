<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import type { SelectOptions } from '$lib/@types/form.type';
    import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
    import { parseAttributes } from '$lib/js/attributeProps';
    import Link from '$components/ext/Link.svelte';
    import ClickOutside from '$components/ext/ClickOutside.svelte';
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    export let value: any = '';
    export let name = '';
    export let options: SelectOptions[] = [];
    export let id = '';
    export let css = '';
    export let disabled = false;
    export let placeholder = '';
    export let data = {};
    export let allowReset = false;
    let valueText = '';
    let formInput;
    let optionsOpen = false;
    let commonAttributes: any = {};
    $: {
        commonAttributes = parseAttributes({id, css, data});
        if (allowReset) {
            options.unshift({text: '- Reset -', value: undefined});
        }
    }
 
    onMount(() => {
        setValue(value);
    });

    function setValue(value: string) {
        valueText = '';
        options.forEach(option => {
            if (value && value == option.value) {
                valueText = option.text;
                formInput.value = option.value;
            }
        });

        if (!valueText) {
            formInput.value = '';
        }

        // if no value, pick first option
        if (!allowReset && !valueText && options[0]) {
            valueText = options[0].text;
            formInput.value = options[0].value;
        }
    }

    function toggleOptions(event) {
        optionsOpen = optionsOpen ? false : true;
    }

    function onSelectOption (event) {
        const option = event.target.closest('a');
        const value = option.getAttribute('data-value') ?? '';
        setValue(value);
        optionsOpen = false;
        dispatch('input', formInput.value);
    }
</script>

<div class="wrapper-select" class:open={optionsOpen === true}>
    <div {...commonAttributes}>
        <input type="hidden" name="{name}" value="{value}" bind:this={formInput}/>
        <span class="selected-arrow" on:mousedown={!disabled ? toggleOptions : undefined}><Fa icon={faAngleUp} /></span>
        <div class="input-select" class:disabled={disabled} on:mousedown={!disabled ? toggleOptions : undefined}>
            {#if valueText}
            {valueText}
            {:else if placeholder}
            <span class="placeholder">{placeholder}</span>
            {/if}
        </div>
        <ClickOutside on:click-outside={toggleOptions} exclude=".wrapper-select" active={optionsOpen}>
            <ul>
            {#each options as option, i}
                <li>
                    <Link
                        on:mousedown={onSelectOption}
                        data={{value: option.value}}
                        icon={option.icon}
                    >{option.text}</Link>
                </li>
            {/each}
            </ul>
        </ClickOutside>
    </div>
</div>


<style lang="css">
    .wrapper-select {
        display: inline-block;
        position: relative;
        user-select: none;
    }
    .wrapper-select.open div :global(ul) {
        display: block;
        height: auto;
        z-index: 100;
        overflow-x: hidden;
        overflow-y: auto;
        min-width: 11.75em;
    }
    .wrapper-select div  .selected-arrow > :global(svg) {
        transition: transform .1s ease-in;
        transform: rotate(180deg);
    }

    .wrapper-select {
        display: inline-block;
        position: relative;
    }

    .wrapper-select .input-select {
        white-space: nowrap;
        overflow: hidden;
        padding: .25em;
        padding-right: .5em;
    }
    .wrapper-select ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .wrapper-select ul {
        overflow: hidden;
        position: absolute;
        display: none;
        margin-top: -.25em;
        max-height: 15em;
        white-space: nowrap;
    }

    .wrapper-select :global(a) {
        text-decoration: none;
        padding: .35em;
        display: block;
    }
    .wrapper-select :global(.fa) {
        position: absolute;
    }

    .wrapper-select .selectedIcon, .wrapper-select .selected-arrow {
        z-index: 5;
        position: absolute;
        top: 0;
    }

    .wrapper-select .selected-arrow {
        right: 0;
        padding: .3em .55em;
    }
    
    .wrapper-select .selectedIcon {
        padding: 4px;
        left: 1.75em;
    }
    .wrapper-select .active {
        display: block;
    }

    .wrapper-select .selected-arrow, .wrapper-select .input-select {
        cursor: pointer;
    }
</style>
