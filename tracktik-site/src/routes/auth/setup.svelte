<script lang="ts">
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { t } from '$lib/i18n';
	import { request, METHODS } from '$lib/js/restClient';
	import Form from '$components/ext/form/Form.svelte';
    import type { Fieldset } from '$form';
    import { Manager, FieldType } from '$form';
    import { isNotBlank, isDomain } from '$form/FieldValidator';

	let isLoading = false;
	let fieldsets: Fieldset[] = [{fields: [{
		name: 'domain',
		type: FieldType.TEXT,
		value: '',
		placeholder: $t('page.auth.enter_domain'),
		validators: [
			isNotBlank, isDomain
		],
	}]}];

	async function setup(event) {
		let form = new Manager(event.detail.formId, event.detail.fieldsets);
		let portalDomain = form.getField('domain');
		isLoading = true;
		fieldsets = await form.validateFieldsets();
		if (form.hasErrors()) {
			isLoading = false;
			return;
		}

		try {
			let res = await request('/about', METHODS.GET, {},  {"rest-domain": portalDomain.value});
			if (res && res.ok) {
				$session.portal = await res.json();

				goto('/auth');
				isLoading = false;
				return;
			}

			form.setFieldError('domain', $t('common.form.errors.invalid-field', {values: {fieldname: 'domain'}}));
		} catch (err) {
			console.error(err.message);
			form.setFieldError('domain', $t('common.form.errors.invalid-field', {values: {fieldname: 'domain'}}));
		}

		fieldsets = form.getFieldsets();
		isLoading = false;
	}
</script>

<div class="form-setup">
	<Form
		on:submit={setup}
		fieldsets={fieldsets}
		isLoading={isLoading}
	/>
</div>
<style lang="css">
	.form-setup :global(form) {
		display: flex;
	}

	.form-setup :global(button[type="submit"]),
	.form-setup :global(input[type="text"]) {
		width: 13em;
		line-height: .8em;
		padding: .8em;
	}

	.form-setup :global(button[type="submit"]) {
		border-width: 1px 1px 1px 0;
		width: 100px;
		height: 40px;
	}
</style>
