<script lang="ts">
    export let img: string;
</script>

{#if img}
<span class="wrapper-avatar"><span class="avatar"><img src="{img}" alt="Avatar" width="42" height="42" /></span></span>
{/if}

<style lang="css">
    .avatar {
        display: flex;
    }
</style>
