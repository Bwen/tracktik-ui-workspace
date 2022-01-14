<script lang="ts">
    import { t } from '$lib/i18n';
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    
    export let value: string | number | boolean = '';
    export let name = '';
    export let disabled = '';
    export let id = '';

    let checked = false;
    $: {
        checked = value ? true : false;
    }

    function onClick(event) {
        checked = !checked;
        value = checked ? 1 : 0;
        dispatch('input', value);
    }
</script>

<div class="wrapper-switch">
    <input type="checkbox" name={name} checked={checked} style="display: none;" />
    <div class="switch" on:click={onClick} class:disabled={disabled}>
        <div>{$t('common.on')}</div>
        <div>{$t('common.off')}</div>
    </div>
</div>

<style lang="css">
    .wrapper-switch {
        display: inline-block;
    }
    
    .wrapper-switch .switch {
        display: flex;
        position: relative;
        cursor: pointer;
        transition: left 0.5s, transform 0.5s;
        padding: 0;
    }

    .wrapper-switch .switch::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transition: left 0.5s, transform 0.5s;
    }

    input:checked + .switch:after {
        left: calc(100%);
        transform: translateX(-100%);
    }

    .wrapper-switch .switch div {
        font-size: .6em;
        padding: .6em 1em;
        text-transform: uppercase;
    }

    .wrapper-switch .switch div:nth-child(2) {
        margin-left: auto;
    }
</style>