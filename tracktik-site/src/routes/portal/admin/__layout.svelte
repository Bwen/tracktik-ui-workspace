<script lang="ts">
	import Sidebar from '$components/SideBar.svelte';
    import type { Link as LinkType } from '@type/Link.type';
    import { 
        faDesktop, faUsers, faUserFriends, faMapMarkedAlt, 
        faChartLine, faEllipsisH
    } from '@fortawesome/free-solid-svg-icons';
    import { session } from '$app/stores';
	import { t } from '$lib/i18n';
    import { filterItemsBySession } from '$lib/js/utils';
	
	let urlPrefix = '/portal/admin';
	let menuItems: LinkType[] = [
        {text: $t('page.layout.side-bar.dashboards'), icon: faDesktop, href: `${urlPrefix}/dashboards`, acl: 'dashboard/admin/overview'},
        {text: $t('page.layout.side-bar.sites'), icon: faUserFriends, href: `${urlPrefix}/site/list`, acl: 'customer/view'},
        {text: $t('page.layout.side-bar.employees'), icon: faUsers, href: `${urlPrefix}/employee`},
        {text: $t('page.layout.side-bar.maps'), icon: faMapMarkedAlt, href: `${urlPrefix}/maps`},
        //{text: $t('page.layout.side-bar.sales'), icon: faChartLine, href: `${urlPrefix}/sales`},
        {text: $t('page.layout.side-bar.settings'), icon: faEllipsisH, href: `${urlPrefix}/settings`, acl: 'system/settings'},
    ];

    filterItemsBySession(menuItems, $session);
</script>

<svelte:head><title>{$t('page.admin.title')}</title></svelte:head>
<div class="layout-admin">
	<Sidebar menuItems={menuItems} />
	<slot />
</div>

<style lang="css">
	.layout-admin {
		display: flex;
		min-height: 100%;
		width: 100%;
	}
</style>
