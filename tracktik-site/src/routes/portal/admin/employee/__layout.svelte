<script lang="ts">
	import TopTabs from '$components/TopTabs.svelte';
    import type { Link as LinkType } from '@type/Link.type';
	import { t } from '$lib/i18n';
	
	let urlPrefix = '/portal/admin/employee';
	let topTabItems: LinkType[] = [
        {text: $t('page.layout.side-bar.employees'), href: `${urlPrefix}`},
        {text: $t('page.employee.top-tabs.departments'), href: `${urlPrefix}/departement`},
        {text: $t('page.employee.top-tabs.skills'), href: `${urlPrefix}/skills`},
        {text: $t('page.employee.top-tabs.audit'), href: `${urlPrefix}/audit`},
    ];
</script>

<svelte:head><title>{$t('page.employee.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-employee">
	<TopTabs tabItems={topTabItems} />
    <slot />
</div>

<style lang="css">
	.layout-employee {
		display: flex;
		min-height: 100%;
		width: 100%;
        flex-direction: column;
	}
</style>
