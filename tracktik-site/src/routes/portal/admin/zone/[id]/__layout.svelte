<script context="module" lang="ts">
	import { request, METHODS } from '$lib/js/restClient';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, session }) {
		let zone = await fetchClient(params.id, session.id);
		return {
			props: {
				zone,
			},
		}
	}

    async function fetchClient(id: number, sessionId: string) {
		let zone = {};
        let res = await request(`/zones/${id}`, METHODS.GET, {
            'include': 'region,region.address,address',
        }, {'rest-session-id': sessionId});

        if (res.ok) {
            let result = await res.json();
			zone = result.data;
        }

        return zone;
    }
</script>
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { setContext } from 'svelte';
	import TopTabs from '$components/TopTabs.svelte';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
    import type { Link as LinkType } from '$lib/@types/Link.type';
	import { t } from '$lib/i18n';

	export let zone: any = {};
	let urlPrefix = '/portal/admin/zone';
	let topTabItems: LinkType[] = [
        {text: $t('common.overview'), href: `${urlPrefix}/${zone.id}`},
        {text: $t('common.edit'), href: `${urlPrefix}/departement`},
        {text: $t('page.employee.top-tabs.patrol'), href: `${urlPrefix}/skills`},
        {text: $t('page.employee.top-tabs.timesheets'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.skills'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.schedules'), href: `${urlPrefix}/audit`},
    ];

	setContext('current-profile', zone);
</script>

<svelte:head><title>{$t('page.client.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-zone-profile">
	<ProfileHeader />
	<TopTabs tabItems={topTabItems} />
	<div class="wrapper-content" transition:fade={{duration: 300}}><div class="content">
    	<slot />
	</div></div>
</div>

<style lang="css">
</style>
