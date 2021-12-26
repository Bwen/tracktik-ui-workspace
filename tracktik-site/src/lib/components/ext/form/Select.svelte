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
    let valueText = '';
    let formInput;
    let optionsOpen = false;
    let commonAttributes: any = {};
    $: {
        commonAttributes = parseAttributes({id, css, data});
        options.unshift({text: '- Reset -', value: undefined});
        setValue(value);
    }
 

    onMount(() => {
        setValue(value);
    });

    function setValue(value: string) {
        valueText = '';
        options.forEach(option => {
            if (value && value == option.value) {
                valueText = option.text;
            }
        })
    }

    function toggleOptions(event) {
        optionsOpen = optionsOpen ? false : true;
    }

    function onSelectOption (event) {
        const option = event.target.closest('a');
        valueText = option.querySelector('.text').innerText;
        formInput.value = option.getAttribute('data-value');
        optionsOpen = false;
        dispatch('input', formInput.value);
    }
</script>

<div class="wrapper-select" class:open={optionsOpen === true}>
    <div {...commonAttributes}>
        <input type="hidden" name="{name}" value="{value}" bind:this={formInput}/>
        <span class="selected-arrow" on:mousedown={toggleOptions}><Fa icon={faAngleUp} /></span>
        <div class="input-select" class:disabled={disabled} on:mousedown={toggleOptions}>
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
    .wrapper-select,
    .wrapper-select div {
        display: inline-block;
        position: relative;
    }

    .wrapper-select .input-select {
        white-space: nowrap;
        overflow: hidden;
        user-select: none;
    }

    .wrapper-select ul,
    .wrapper-select li {
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
    }
    .wrapper-select.open :global(ul) {
        display: block;
        height: auto;
        z-index: 100;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .wrapper-select ul :global(a) {
        white-space: nowrap;
        text-decoration: none;
        padding: .35em;
        display: block;
    }

    .wrapper-select ul :global(.fa) {
        position: absolute;
        margin: 8px;
    }

    .wrapper-select .selectedIcon,
    .wrapper-select .selected-arrow {
        z-index: 5;
        position: absolute;
        top: 0;
    }
    .wrapper-select .selected-arrow {
        right: 0;
    }
    .wrapper-select.open .selected-arrow > :global(svg) {
        transition: transform .1s ease-in;
        transform: rotate(180deg);
    }
    .wrapper-select .selectedIcon {
        padding: 4px;
        left: 1.75em;
    }
    .wrapper-select .active {
        display: block;
    }

    .wrapper-select .selected-arrow,
    .wrapper-select .input-select {
        cursor: pointer;
    }
</style>
