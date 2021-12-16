<script lang="ts">
    import type { Link as LinkType } from '@type/Link.type';
    import Link from '$components/Link.svelte';
    import { 
        faDesktop, faUsers, faUserFriends, faMapMarkedAlt, 
        faChartLine, faEllipsisH
    } from '@fortawesome/free-solid-svg-icons';
    //import { faUser } from '@fortawesome/free-regular-svg-icons';

    import { session } from '$app/stores';

    let avatar;
    $: {
        if ($session.auth) {
            console.log($session.auth);
            avatar = $session.auth.user.avatar;
        }
    }

    export let menuItems: LinkType = [];

    menuItems = [
        {text: 'Dashboards', icon: faDesktop},
        {text: 'Sites (Client)', icon: faUserFriends},
        {text: 'Employees', icon: faUsers},
        {text: 'Maps', icon: faMapMarkedAlt},
        {text: 'Sales & Lists', icon: faChartLine},
        {text: 'Settings', icon: faEllipsisH},
    ];
</script>

<section class="side-bar">
    {#if avatar}
    <div class="logged-user">
        <img src="{avatar}" alt="User Avatar" />
    </div>
    {/if}
    <ul>
    {#each menuItems as item}
        <li><Link {...item} /></li>
    {/each}
    </ul>
</section>

<style lang="css">
    .side-bar {
        width: 100px;
        z-index: 10;
    }

    .side-bar .logged-user {
        padding: 16px;
    }

    .side-bar ul,
    .side-bar li {
        list-style: none;
        padding: 0;
        margin: 0;
        display: block;
    }

    .side-bar li :global(a) {
        display: block;
        padding: .85em 0;
        text-align: center;
        font-size: .9em;
    }
    
    .side-bar li :global(.icon) {
        font-size: 1.5em;
    }

    .side-bar li :global(.text) {
        margin-top: .65em;
        display: block;
    }
</style>
