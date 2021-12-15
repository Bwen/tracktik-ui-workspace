<script lang="ts">
	import Sidebar from '$components/SideBar.svelte';
	import { init } from '$lib/i18n';
</script>

<div class="layout-admin">
	<Sidebar />
	<slot />
</div>

<style lang="css">
	.layout-admin {
		display: flex;
		height: 100%;
		width: 100%;
	}
</style>
