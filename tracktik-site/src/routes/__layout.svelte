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
	import '$lib/css/themes/default/index.css';

	import { t } from '$lib/i18n';
</script>

<svelte:head><title>{$t('page.layout.title')}</title></svelte:head>

<main>
	<slot />
</main>

<style lang="css">
</style>
