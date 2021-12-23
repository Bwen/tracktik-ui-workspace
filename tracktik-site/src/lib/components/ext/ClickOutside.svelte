<script lang="ts">
    import { browser } from '$app/env';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let exclude: string;
    export let active: boolean;

    function handleClickOutside(event) {
        const wrapperSelect = event.target.closest(exclude);
        if (wrapperSelect) {
            return;
        }

        dispatch('click-outside');
    }

    $: {
        if (browser) {
            if (active) {
                window.addEventListener('click', handleClickOutside);
            } else {
                window.removeEventListener('click', handleClickOutside);
            }
        }
    }
</script>

<div class="click-outside">
    <slot />
</div>
