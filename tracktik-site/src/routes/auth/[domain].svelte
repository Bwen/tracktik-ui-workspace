<script context="module" lang="ts">
	import { request, METHODS } from '$lib/js/restClient';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, session }) {
		try {
			let res = await request('/about', METHODS.GET, {},  {"rest-domain": params.domain});
			if (res && res.ok) {
				return {props: {portal: await res.json()}};
			}
		} catch (err) {
			console.error(err.message);
		}

		return {status: 302, redirect: '/auth/setup'};
	}
</script>
<script lang="ts">
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	export let portal;
	if (browser && portal) {
		$session.portal = portal;
		localStorage.setItem('session:domain', $session.portal.url);
		goto('/auth');
	}
</script>