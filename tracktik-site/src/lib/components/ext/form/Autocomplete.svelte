<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import { parseAttributes } from '$lib/js/attributeProps';
    import ClickOutside from '$components/ext/ClickOutside.svelte';
    import type { SelectOptions } from '$lib/@types/form.type';
    import Input from '$lib/components/ext/form/Input.svelte';
    import Link from '$lib/components/ext/Link.svelte';
    import LoadingBar from '$components/ext/LoadingBar.svelte';
	import { onMount } from 'svelte';

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let value = '';
    export let name = '';
    export let placeholder = '';
    export let options: SelectOptions[] = [];
    export let icon: IconDefinition = undefined;
    export let includeChildsInSearch = false;

    export let id = '';
    export let css = '';
    export let data = {};
    export let disabled = false;
    export let isLoading = false;

    let selectedReset = false;
    let optionsOpen = false;
    let searchInput;
    let formInput;
    let filteredOptions = [];
    let commonAttributes = {};
    $: {
        commonAttributes = parseAttributes({id, css, data});
        filteredOptions = options;
    }

    function onFilterOptions() {
        if (!searchInput) return;

        let value = searchInput.getValue().toLowerCase();
        if (!value) {
            formInput.value = '';
        }

        let selectedOptions = [];
        filteredOptions = options.filter((option) => {
            if (option.text.toLowerCase().includes(value)) {
                selectedOptions.push(option.value);
                return true;
            }

            if (includeChildsInSearch && option.parentValue && selectedOptions.indexOf(option.parentValue) !== -1) {
                return true;
            }

            return false;
        });
    }

    function onSearch(event) {
        reset();
        optionsOpen = true;
    }

    function toggleOptions(event) {
        optionsOpen = optionsOpen ? false : true;
    }

    function reset() {
        selectedReset = false;
        searchInput.setValue('');
    }

    function onKeyup(event) {
        event.stopPropagation();

        dispatch('keyup', searchInput.getValue());
    }

    function onReset(event) {
        reset();
        formInput.value = '';
        dispatch('keyup', formInput.value);
        dispatch('input', formInput.value);
    }

    function onSelectOption (event) {
        const option = event.target.closest('a');
        const value = option.getAttribute('data-value');
        selectValue(value);

        searchInput.blur();
        dispatch('input', formInput.value);
    }

    function selectValue(value) {
        if (!value) {
            selectedReset = false;
            optionsOpen = false;
            formInput.value = '';
            searchInput.setValue('');
            return;
        }

        options.forEach(option => {
            if (value == option.value) {
                selectedReset = true;
                optionsOpen = false;
                formInput.value = value;
                searchInput.setValue(option.text);
            }
        });
    }

    function checkValue(event) {
        if (formInput.value && !searchInput.getValue()) {
            selectValue(formInput.value);
        }
    }

	onMount(() => {
        selectValue(value);
    });
</script>

<div class="wrapper-autocomplete" class:open={optionsOpen === true}>
    <div {...commonAttributes}>
        <input type="hidden" name="{name}" value="{value}" bind:this={formInput}/>
        <a class="selectedReset" class:active={selectedReset} on:click={onReset}><Fa icon={faTimes} /></a>
        <LoadingBar isLoading={isLoading} />
        <Input
            bind:this={searchInput}
            on:focus={onSearch}
            on:blur={checkValue}
            on:input={onFilterOptions}
            on:keyup={onKeyup}
            disabled={disabled ? 'disabled' : ''}
            placeholder="{placeholder ?? ''}"
            icon={ icon ? icon : faSearch}
        />
        <ClickOutside on:click-outside={toggleOptions} exclude=".wrapper-autocomplete" active={optionsOpen}>
            <ul>
            {#each filteredOptions as option, i}
                <li style="{option.indent ? 'padding-left: ' + (1 * option.indent) + 'em;' : ''}">
                    <Link
                        on:mouseup={onSelectOption}
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
    .wrapper-autocomplete {
        display: inline-block;
        position: relative;
    }
        
    .wrapper-autocomplete.open ul {
        display: block;
        height: auto;
        z-index: 75;
        overflow-x: hidden;
        overflow-y: auto;
    }
        
    .wrapper-autocomplete div {
        display: inline-block;
        position: relative;
    }

    .wrapper-autocomplete ul, .wrapper-autocomplete li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .wrapper-autocomplete ul {
        overflow: hidden;
        position: absolute;
        display: none;
        max-height: 15em;
    }

    .wrapper-autocomplete ul :global(a) {
        white-space: nowrap;
        text-decoration: none;
        padding: .35em;
        display: block;
    }

    .wrapper-autocomplete :global(div[class^="s-"] .wrapper-input .icon),
    .wrapper-autocomplete ul :global(.icon) {
        position: absolute;
        margin: 4px 8px;
    }

    .wrapper-autocomplete .selectedReset {
        z-index: 5;
        position: absolute;
        display: none;
        right: 0;
        top: 0;
        padding: 3px 8px;
        cursor: pointer;
    }

    .wrapper-autocomplete .selectedReset.active {
        display: block;
    }

    .wrapper-autocomplete > div :global(.wrapper-loading) {
        z-index: 5;
        position: absolute;
        display: none;
        left: 1px;
        top: 1px;
        padding: 0;
        margin: 0;
        height: 2px;
        width: 99%;
        border: 0;
    }

    .wrapper-autocomplete > div :global(.wrapper-loading.active) {
        display: block;
    }

    .wrapper-autocomplete .selectedIcon {
        padding: 4px;
        left: 1.75em;
    }

    .wrapper-autocomplete :global(div[class^="s-"] .wrapper-link .icon) {
        margin: 0;
        padding: 0;
    }

    .wrapper-autocomplete .input-select {
        cursor: pointer;
    }
    
    .wrapper-autocomplete :global(.wrapper-link .icon svg) {
        margin: 0;
    }

    .wrapper-autocomplete :global(.icon + .text) {
        margin-left: .65em;
    }

</style>
