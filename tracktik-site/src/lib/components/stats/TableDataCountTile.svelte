<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
    import { faList } from '@fortawesome/free-solid-svg-icons';
	import { t, number } from '$lib/i18n';

    export let count;
</script>

<div class="wrapper-stat-tile table-data-count">
    <Fa icon={faList} />
    <div>{$number(count)}</div>
    <label>Filtered Entries</label>
</div>

<style lang="scss">
</style>