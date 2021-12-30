<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head><title>{$t('page.auth.title')}</title></svelte:head>

<div class="layout-auth">
	<slot />
</div>

<style lang="css">
	.layout-auth {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
</style>
