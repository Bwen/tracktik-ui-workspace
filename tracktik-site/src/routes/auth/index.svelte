<script type="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	import { t, locale } from '$lib/i18n';
    import type { Fieldset } from '$form';
    import { Manager, FieldType } from '$form';
	import { Form } from '$components/form';
	import { request, METHODS } from '$lib/js/restClient';
    import { isNotBlank } from '$form/FieldValidator';

	let isLoading = false;
	let fieldsets: Fieldset[] = [{
		fields: [
			{name: 'username', type: FieldType.TEXT, value: '', placeholder: $t('page.auth.enter_username'), validators: [isNotBlank]},
			{name: 'password', type: FieldType.PASSWORD, value: '', placeholder: $t('page.auth.enter_password'), validators: [isNotBlank]},
			{
				name: 'locale',
				type: FieldType.SELECT,
				value: $locale,
				options: [
					{value: "en-us", text: 'English'},
					{value: "fr", text: 'Français (French)'},
					{value: "ro", text: 'Romanian (Român)'},
					{value: "es", text: 'Español (Spanish)'},
					{value: "de", text: 'Deutsch (German)'},
					{value: "nl", text: 'Nederlands (Dutch)'},
					{value: "pt", text: 'Português (Portuguese)'},
					{value: "sv", text: 'Svenska (Swedish)'},
					{value: "zh-hans", text: '简体中文 (Chinese Simplified)'},
					{value: "th", text: 'ไทย (Thaï)'},
				]
			},
		]
	}];

	async function login(event) {
		let form = new Manager(event.detail.formId, event.detail.fieldsets);
		const username = form.getField('username').value;
		const password = form.getField('password').value;
		const language = form.getField('locale').value;
		try {
			isLoading = true;
			fieldsets = await form.validateFieldsets();
			if (form.hasErrors()) {
				isLoading = false;
				return;
			}

			let res = await request('/auth', METHODS.POST, { username, password, language });
			if (res.ok) {
				const response = await res.json();

				$locale = language;
				$session.locale = language;
				$session.auth = {
					portal: response.auth.portal,
					permissions: response.auth.permissions,
					pref: response.auth.pref,
					scopes: response.auth.scopes,
					user: response.auth.user,
				};

				isLoading = false;
				goto(`/portal/${response.auth.portal}`);
				return;
			}

			form.setFieldError('locale', $t('page.auth.invalid_credentials'));
		} catch (err) {
			form.setFieldError('locale', err.message);
		}

		fieldsets = form.getFieldsets();
		isLoading = false;
	}

	function onValueChange(event) {
		let { field } = event.detail;
		if (field.name === 'locale') {
			$locale = field.value;
		}
	}
</script>

<div class="form-login"
	in:fly="{{ y: -50, duration: 250, delay: 300 }}"
    out:fly="{{ y: -50, duration: 250 }}"
>
	{#if $session.portal}<img src={$session.portal.logo} alt="Logo" />{/if}
	<Form
		on:submit={login}
		on:change={onValueChange}
		fieldsets={fieldsets}
		isLoading={isLoading}
	/>
</div>

<style lang="css">

	.form-login :global(form) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

</style>
