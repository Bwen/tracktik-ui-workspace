<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head><title>{$t('page.client.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-client">
    <slot />
</div>

<style lang="css">
	.layout-client {
		display: flex;
		width: 100%;
        flex-direction: column;
	}
</style>
