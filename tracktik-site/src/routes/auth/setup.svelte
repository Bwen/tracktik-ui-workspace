<script lang="ts">
    import type { Fieldset } from '$lib/@types/form.type';
    import { FormFieldType } from '$lib/@types/form.type';
	import { goto } from '$app/navigation';
	import { Form } from '$lib/components/form';
	import { t } from '$lib/i18n';
	import { request, METHODS } from '$lib/js/restClient';
	import { session } from '$app/stores';

	let isLoading = false;
	let fieldsets: Fieldset[] = [{fields: [{name: 'domain', type: FormFieldType.TEXT, value: '', placeholder: $t('page.auth.enter_domain')}]}];
	async function setup(event) {
		let { form } = event.detail;
		let portalDomain = form.getField('domain');
		isLoading = true;
		form.setFieldError('domain', undefined);
		try {
			let res = await request('/about', METHODS.GET, {}, portalDomain.value);
			if (res.ok) {
				$session.portal = await res.json();

				goto('/auth');
				isLoading = false;
				return;
			}
			
			form.setFieldError('domain', 'Invalid domain');
		} catch (err) {
			form.setFieldError('domain', err.message);
		}

		fieldsets = form.fieldsets;
		isLoading = false;
	}
</script>

<Form 
	on:submit={setup} 
	fieldsets={fieldsets} 
	isLoading={isLoading}
/>

<style lang="css">
</style>
