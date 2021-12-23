<script lang="ts">
    export let uid: string;
</script>

{#if uid && uid !== 'N/A'}
<span class="wrapper-uid"><span class="uid">{uid}</span></span>
{/if}
