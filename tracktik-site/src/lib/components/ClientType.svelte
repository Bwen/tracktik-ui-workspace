<script lang="ts">
    import { t } from '$lib/i18n';
    import type { ClientsItem } from '@rest/models/ClientsItem';

    export let type: ClientsItem.type;
</script>

<div class="wrapper-client-type"><div class="client-type {type}">{$t(`clientType.${type}`)}</div></div>

<style lang="css">

</style>