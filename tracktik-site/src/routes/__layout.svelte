<script context="module">
	import { init } from '$lib/i18n';

	export async function load({session}) {
	  await init(session);
	  return {};
	}
</script>
<script lang="ts">
	import '$lib/js/media-theme';
	import '$lib/css/sanitize.css';
	import '$lib/css/themes/default/index.scss';

	import Cookies from 'js-cookie';
	import AppHeader from '$components/AppHeader.svelte';
	import Snackbar from '$components/ext/Snackbar.svelte';
    import { faCog, faCogs, faDoorClosed, faDoorOpen, faLightbulb as faLightbulbDark } from '@fortawesome/free-solid-svg-icons';
	import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
	import { session } from '$app/stores';
	import Modal from '$components/ext/Modal.svelte';
	import UiSettings from '$components/UiSettings.svelte';
	import { t } from '$lib/i18n';
    import type { Link as LinkType } from '$lib/@types/Link.type';

	let uiSettingModal;
	let rightItems: LinkType[] = [
		{icon: faCog, icon_hover: faCogs, title: 'UI Settings', id: 'ui-settings'},
		{icon: faLightbulbDark, icon_hover: faLightbulb, title: 'Light/Dark mode', id: 'theme-mode'},
	];

	let logoItem = undefined;
	$: {
		if ($session.portal) {
			logoItem = {img: $session.portal.logoApp};
			if (!hasItemId('logout', rightItems)) {
				rightItems.push({icon: faDoorClosed, icon_hover: faDoorOpen, title: 'Logout', id: "logout"});
			}
		}
		rightItems = rightItems;
	}

	function hasItemId(id: string, items: LinkType[]): boolean {
		for (let i=0; i < items.length; i++) {
			if (id === items[i].id) {
				return true;
			}
		}

		return false;
	}

	function onItemClick(event) {
        if ('logout' === event.detail.hyperlink.id) {
			Cookies.remove('rest-session-id', { path: '/' });
			location.reload();
		}

		
        if ('ui-settings' === event.detail.hyperlink.id) {
			uiSettingModal.open();
		}
	}
</script>

<svelte:head><title>{$t('page.layout.title')}</title></svelte:head>
<AppHeader logoItem={logoItem} rightItems={rightItems} on:item-click={onItemClick} />
<main>
	<slot />
</main>

<Snackbar />
<Modal bind:this={uiSettingModal}><UiSettings /></Modal>

<style lang="css">
	:global(.app-header) {
		z-index: 5;
	}
</style>
