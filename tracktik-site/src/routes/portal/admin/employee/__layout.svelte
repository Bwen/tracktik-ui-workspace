<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head><title>{$t('page.employee.title')} - {$t('page.admin.title')}</title></svelte:head>
<div class="layout-employee">
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
