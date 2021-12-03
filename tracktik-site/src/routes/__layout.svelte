<script lang="ts">
    import '$lib/js/media-theme';
    import '$lib/css/sanitize.css';
    import '$lib/css/themes/default/index.css';

    import { browser } from '$app/env';
    import { goto } from '$app/navigation';
    import { domain } from '$lib/stores/portal';
    if (browser && !$domain) {
        goto('/auth');
    }
</script>
<style lang="css">
</style>

<h1>BASE LAYOUT</h1>
<main>
    <slot></slot>
</main>
