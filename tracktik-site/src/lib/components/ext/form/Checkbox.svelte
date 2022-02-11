<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let name: string;
    export let value: string;
    export let id: string = '';
    export let checked: boolean = false;
    export let disabled = '';

    function onInput(event) {
        const {checked, value} = event.target;
        dispatch('input', {checked, value});
    }
</script>

<span class="wrapper-checkbox">
    <input type="checkbox" 
        on:input={onInput} 
        id="{id}" 
        name="{name}" 
        value="{value}" 
        checked={checked}
        disabled={disabled ? true : false}
    />
</span>
