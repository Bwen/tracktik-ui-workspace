<script lang="ts">
	import Sidebar from '$components/SideBar.svelte';
    import RegionSelecter from '$components/RegionSelector.svelte';
    import type { MenuItem } from '$lib/@types/MenuItem.type';
    import { 
        faDesktop, faUsers, faUserFriends, faMapMarkedAlt, 
        faChartLine, faEllipsisH, faGlobeAmericas
    } from '@fortawesome/free-solid-svg-icons';
	import { t } from '$lib/i18n';
    import { session } from '$app/stores';

	let urlPrefix = '/portal/admin';
	let menuItems: MenuItem[] = [
        {text: $t('page.layout.side-bar.dashboards'), icon: faDesktop, href: `${urlPrefix}/dashboard`, acl: 'dashboard/admin/overview', subItems: [
            {text: $t('page.dashboard.sub-menu.dashboard'), href: `${urlPrefix}/dashboard`, acl: 'patrol/client/livedashboard'},
            {text: $t('page.dashboard.sub-menu.schedule'), href: `${urlPrefix}/schedule`, acl: 'schedule/client/view', module: 'BACKOFFICE'},
            {text: $t('page.dashboard.sub-menu.vehicle'), href: `${urlPrefix}/vehicle`, acl: 'patrol/vehicle', module: 'PATROLS'},
            {text: $t('page.dashboard.sub-menu.journal'), href: `${urlPrefix}/journal`, acl: 'journal/dashboard'},
            {text: $t('page.dashboard.sub-menu.exceptions'), href: `${urlPrefix}/exceptions`, acl: 'ticket/list'},
            {text: $t('page.dashboard.sub-menu.attendance'), href: `${urlPrefix}/attendance`, acl: 'timekeeping/attendance/dashboard'},
            {text: $t('page.dashboard.sub-menu.loneworker'), href: `${urlPrefix}/loneworker`, acl: 'loneworker/setup'},
        ]},
        {text: $t('page.layout.side-bar.clients'), icon: faUserFriends, href: `${urlPrefix}/client`, acl: 'customer/view', subItems: [
            {text: $t('page.client.sub-menu.zones'), href: `${urlPrefix}/zone`},
        ]},
        {text: $t('page.layout.side-bar.employees'), icon: faUsers, href: `${urlPrefix}/employee`, subItems: [
            {text: $t('page.employee.sub-menu.departments'), href: `${urlPrefix}/departement`},
            {text: $t('page.employee.sub-menu.skills'), href: `${urlPrefix}/skills`},
            {text: $t('page.employee.sub-menu.audit'), href: `${urlPrefix}/audit`},
        ]},
        {text: $t('page.layout.side-bar.maps'), icon: faMapMarkedAlt, href: `${urlPrefix}/maps`},
        //{text: $t('page.layout.side-bar.sales'), icon: faChartLine, href: `${urlPrefix}/sales`},
        {text: $t('page.layout.side-bar.settings'), icon: faEllipsisH, href: `${urlPrefix}/settings`, acl: 'system/settings'},
    ];

    async function onRegionChange(event) {
        // send a request with the region filter so its saved in the session
        await fetch('/session', {
            headers: {'rest-region-filter': event.detail},
            method: 'POST',
        });
        
        // Trigger Session reactivity
        session.set($session);
    }
</script>

<svelte:head><title>{$t('page.admin.title')}</title></svelte:head>
<div class="layout-admin">
	<Sidebar menuItems={menuItems} />
    <div class="layout-admin-content">
        {#if $session.auth.scopes.regions.length > 1}<RegionSelecter on:change={onRegionChange} icon={faGlobeAmericas} />{/if}
	    <slot />
    </div>
</div>

<style lang="css">
</style>
