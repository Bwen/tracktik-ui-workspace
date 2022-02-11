<script context="module" lang="ts">
	import { request, METHODS } from '$lib/js/restClient';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, session }) {
		let employee = await fetchEmployee(params.id, session.id);
		return {
			props: {
				employee,
			},
		}
	}

    async function fetchEmployee(id: number, sessionId: string) {
		let employee = {};
        let res = await request(`/employees/${id}`, METHODS.GET, {
            'include': 'region,region.address,address,username,lastLoggedInOn',
        }, {'rest-session-id': sessionId});

        if (res.ok) {
            let result = await res.json();
			employee = result.data;
        }

        return employee;
    }
</script>
<script lang="ts">
	import { setContext } from 'svelte';
	import TopTabs from '$components/TopTabs.svelte';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
    import type { Link as LinkType } from '$lib/@types/Link.type';
	import { t } from '$lib/i18n';

	export let employee: any = {};
	let urlPrefix = '/portal/admin/employee';
	let topTabItems: LinkType[] = [
        {text: $t('common.overview'), href: `${urlPrefix}/${employee.id}`},
        {text: $t('common.edit'), href: `${urlPrefix}/departement`},
        {text: $t('page.employee.top-tabs.patrol'), href: `${urlPrefix}/skills`},
        {text: $t('page.employee.top-tabs.timesheets'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.skills'), href: `${urlPrefix}/audit`},
        {text: $t('page.employee.top-tabs.schedules'), href: `${urlPrefix}/audit`},
    ];

	setContext('current-profile', employee);
    let profileActionItems = [
        {id: 'change-password', text: $t('page.employee.action-items.change-password')},
        {id: 'force-change-password', text: $t('page.employee.action-items.force-change-password')},
        {id: 'snap-picture', text: $t('page.employee.action-items.snap-picture')},
        {id: 'terminate', text: $t('page.employee.action-items.terminate')},
        {id: 'id-card', text: $t('page.employee.action-items.id-card')},
        {id: 'tracks', text: $t('page.employee.action-items.tracks')},
        {id: 'hr-profile', text: $t('page.employee.action-items.hr-profile')},
    ];

	function onActionClick(event) {
		const actionId = event.detail.hyperlink.id;
	}
</script>

<svelte:head><title>{$t('page.employee.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-employee-profile">
	<ProfileHeader actionItems={profileActionItems} on:action-click={onActionClick} />
	<TopTabs tabItems={topTabItems} />
	<slot />
</div>

<style lang="css">
</style>
