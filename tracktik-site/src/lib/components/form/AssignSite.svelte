<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faUsers } from "@fortawesome/free-solid-svg-icons";
    import { Form } from '$components/ext/form';
    import { Fieldset, FieldType } from '$form';
    import { getAccountOptions } from '$lib/js/utils';
    import { session } from '$app/stores';
	import { t } from '$lib/i18n';

    let fieldsets: Fieldset[] = [{
        fields: [
            {
                name: 'account',
                label: $t('page.employee.account-assignment.search-account'),
                type: FieldType.AUTOCOMPLETE,
                isLoading: false,
                options: [],
            },
            {
                name: 'startedOn',
                label: $t('page.employee.account-assignment.startedOn'),
                type: FieldType.CALENDAR,
                isPicker: true,
                options: [],
                tooltip: $t('page.employee.account-assignment.startedOnTooltip'),
            },
        ],
    }];

    (async () => fieldsets[0].fields[0].options = await getAccountOptions())();

    async function onFormKeyup(event) {
        let { field, value } = event.detail;
        if ('account' === field.name && ('' === value || value.length > 3)) {
            fieldsets[0].fields[0].isLoading = true;
            fieldsets[0].fields[0].options = await getAccountOptions(value);
            fieldsets[0].fields[0].isLoading = false;
        }
    }
</script>

<section class="wrapper-form-assign-site">
    <header><Fa icon={faUsers} />{$t('page.employee.account-assignment.assign-to-site')}</header>
    <section class="form-assign-site">
        <Form fieldsets={fieldsets} on:keyup={onFormKeyup} />
    </section>
</section>

<style lang="scss">

</style>