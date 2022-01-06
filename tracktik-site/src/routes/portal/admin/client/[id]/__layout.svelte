<script context="module" lang="ts">
	import { request, METHODS } from '$lib/js/restClient';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		let client = await fetchClient(page.params.id, session.portal.url, fetch);
		return {
			props: {
				client,
			},
		}
	}
	
    async function fetchClient(id: number, domain: string, fetch) {
		let client = {};
        let res = await request(`/clients/${id}`, METHODS.GET, {
            'include': 'region,region.address,address',
        }, '', fetch);

        if (res.ok) {
            let result = await res.json();
			client = result.data;
        }

        return client;
    }
</script>
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { setContext } from 'svelte';
	import TopTabs from '$components/TopTabs.svelte';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
    import type { Link as LinkType } from '$lib/@types/Link.type';
	import { t } from '$lib/i18n';
	
	export let client: any = {};
	let urlPrefix = '/portal/admin/client';
	let topTabItems: LinkType[] = [
        {text: $t('common.overview'), href: `${urlPrefix}/${client.id}`},
        {text: $t('common.edit'), href: `${urlPrefix}/departement`},
        {text: $t('page.employee.top-tabs.patrol'), href: `${urlPrefix}/skills`},
        {text: $t('page.employee.top-tabs.timesheets'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.skills'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.schedules'), href: `${urlPrefix}/audit`},
    ];

	setContext('current-profile', client);
</script>

<svelte:head><title>{$t('page.client.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-client-profile">
	<ProfileHeader />
	<TopTabs tabItems={topTabItems} />
	<div class="wrapper-content" transition:fade={{duration: 300}}><div class="content">
    	<slot />
	</div></div>
</div>

<style lang="css">
</style>
