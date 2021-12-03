<script lang="ts">
    import '$lib/js/media-theme';
    import '$lib/css/sanitize.css';
    import '$lib/css/themes/default/index.css';

    import { browser } from '$app/env';
    import { goto } from '$app/navigation';
    import { domain } from '$lib/stores/portal';
    if (browser && !$domain) {
        goto('/auth/setup');
    }
</script>

<style lang="css">
</style>

<h1>AUTH LAYOUT</h1>
<main>
    <slot></slot>
</main>
