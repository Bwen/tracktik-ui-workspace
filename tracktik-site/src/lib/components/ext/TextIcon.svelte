<script lang="ts">
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import Fa from 'svelte-fa/src/fa.svelte';

    export let text: string;
    export let icon: IconDefinition = null;
</script>

{#if text}
<div class="wrapper-text-icon"><div class="text">{#if icon}<span class="text-icon"><Fa icon={icon} /></span>{/if}<span>{text}</span></div></div>
{/if}

<style lang="css">
    .text-icon {
        display: inline-block;
        width: 16px;
        margin-right: .5em;
    }
</style>