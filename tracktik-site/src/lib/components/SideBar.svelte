<script lang="ts">
    import type { Link as LinkType } from '@type/Link.type';
    import Link from '$components/Link.svelte';
    import { session } from '$app/stores';

    export let menuItems: LinkType = [];

    menuItems = [
        {text: 'Dashboards'},
        {text: 'Sites (Client)'},
        {text: 'Employees'},
        {text: 'Maps'},
        {text: 'Sales & Lists'},
        {text: 'Settings'},
    ];
</script>

<section class="side-bar">
    <div class="logged-user">
        <img src="{$session.auth.user.avatar}" />
    </div>
    {#each menuItems as item}
    <div>
        <Link>{item.text}</Link>
    </div>
    {/each}
</section>

<style lang="css">
    .side-bar {
        width: 100px;
        z-index: 10;
    }

    .side-bar .logged-user {
        padding: 16px;
    }
</style>
