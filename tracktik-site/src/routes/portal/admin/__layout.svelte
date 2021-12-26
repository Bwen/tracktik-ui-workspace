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
        {text: $t('page.layout.side-bar.dashboards'), icon: faDesktop, href: `${urlPrefix}/dashboards`, acl: 'dashboard/admin/overview'},
        {text: $t('page.layout.side-bar.sites'), icon: faUserFriends, href: `${urlPrefix}/site/list`, acl: 'customer/view'},
        {text: $t('page.layout.side-bar.employees'), icon: faUsers, href: `${urlPrefix}/employee`, subItems: [
            {text: $t('page.employee.top-tabs.departments'), href: `${urlPrefix}/departement`},
            {text: $t('page.employee.top-tabs.skills'), href: `${urlPrefix}/skills`},
            {text: $t('page.employee.top-tabs.audit'), href: `${urlPrefix}/audit`},
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
        <RegionSelecter on:change={onRegionChange} icon={faGlobeAmericas} />
	    <slot />
    </div>
</div>

<style lang="css">
	.layout-admin {
		display: flex;
		min-height: 100%;
		width: 100%;
	}
    
	.layout-admin-content {
		display: flex;
        flex-direction: column;
		min-height: 100%;
		width: 100%;
	}
</style>
