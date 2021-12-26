<script context="module" lang="ts">
	import { request, METHODS } from '$lib/js/restClient';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		let employee = await fetchEmployee(page.params.id, session.portal.url, fetch);
		return {
			props: {
				employee,
			},
		}
	}
	
    async function fetchEmployee(id: number, domain: string, fetch) {
		let employee = {};
        let res = await request(`/employees/${id}`, METHODS.GET, {
            'include': 'region,region.address,address,username,lastLoggedInOn',
        }, '', fetch);

        if (res.ok) {
            let result = await res.json();
			employee = result.data;
        }

        return employee;
    }
</script>
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { setContext } from 'svelte';
	import TopTabs from '$components/TopTabs.svelte';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
    import type { Link as LinkType } from '$lib/@types/Link.type';
	import { t } from '$lib/i18n';
	
	let urlPrefix = '/portal/admin/employee';
	let topTabItems: LinkType[] = [
        {text: $t('common.overview'), href: `${urlPrefix}`},
        {text: $t('common.edit'), href: `${urlPrefix}/departement`},
        {text: $t('page.employee.mid-tabs.patrol'), href: `${urlPrefix}/skills`},
        {text: $t('page.employee.mid-tabs.timesheets'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.mid-tabs.skills'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.mid-tabs.schedules'), href: `${urlPrefix}/audit`},
    ];

	export let employee: any = {};
	setContext('current-profile', employee);
</script>

<svelte:head><title>{$t('page.employee.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-employee-profile">
	<ProfileHeader />
	<TopTabs tabItems={topTabItems} />
	<div class="content" transition:fade={{duration: 300}}><div class="content-inner">
    	<slot />
	</div></div>
</div>

<style lang="css">
</style>
