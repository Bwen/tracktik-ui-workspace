<script lang="ts">
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import { session } from '$app/stores';
    import Autocomplete from '$components/ext/form/Autocomplete.svelte';
    import { getRegionOptions } from '$lib/js/utils';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let icon: IconDefinition = undefined;
    const regions = getRegionOptions($session.auth.scopes.regions);
    function onRegionChange(event) {
        dispatch('change', event.detail);
    }

    let value = $session['rest-region-filter'] ?? '';
</script>

<div class="wrapper-region-selector"><div class="region-selector">
    <Autocomplete 
        on:input={onRegionChange}
        includeChildsInSearch={true}
        options={regions} 
        icon={icon}
        value={value}
        placeholder="Viewing All Regions"
    />
</div></div>

<style lang="scss">
    .region-selector {
        font-size: 1.5em;
        position: relative;
    
        :global(.wrapper-autocomplete .wrapper-input),
        :global(.wrapper-autocomplete > div),
        :global(.wrapper-autocomplete) {
            width: 100%;
            display: flex;
        }

        :global(.wrapper-autocomplete ul) {
            left: 0;
            top: 2.15em;
            width: 100%;
            border: 0;
        }

        :global(.wrapper-autocomplete input) {
            flex-grow: 1;
        }
    }
</style>
