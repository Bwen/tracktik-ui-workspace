<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

    export let icon: IconDefinition = null;
    export let title: string;

</script>

<div class="wrapper-bulk-change">
    <header>{#if icon}<Fa icon={icon} />{/if}{title}</header>
    <section class="bulk-change">
        test
    </section>
</div>

<style lang="css">

</style>
