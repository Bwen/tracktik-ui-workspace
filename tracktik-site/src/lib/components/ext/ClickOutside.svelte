<script lang="ts">
    import { browser } from '$app/env';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let exclude: string;
    export let active: boolean;

    let markup;
    function handleClickOutside(event) {
        event.stopPropagation();

        const excludeElement = event.target.closest(exclude);
        if (excludeElement) {
            return;
        }

        dispatch('click-outside');
    }

    $: {
        if (browser) {
            const form = markup ? markup.closest('form') : undefined;
            if (active) {
                if (form) form.addEventListener('click', handleClickOutside);
                window.addEventListener('click', handleClickOutside);
            } else {
                if (form) form.removeEventListener('click', handleClickOutside);
                window.removeEventListener('click', handleClickOutside);
            }
        }
    }
</script>

<div class="click-outside" bind:this={markup}>
    <slot />
</div>
