<script type="ts">
	import { goto } from '$app/navigation';
    import type { Fieldset } from '$lib/@types/form.type';
    import { FormFieldType } from '$lib/@types/form.type';
	import { Form } from '$lib/components/form';
	import { t, locale } from '$lib/i18n';
	import { session } from '$app/stores';
	import { request, METHODS } from '$lib/js/restClient';

	let isLoading = false;
	let fieldsets: Fieldset[] = [{
		fields: [
			{name: 'username', type: FormFieldType.TEXT, value: '', placeholder: $t('page.auth.enter_username')},
			{name: 'password', type: FormFieldType.PASSWORD, value: '', placeholder: $t('page.auth.enter_password')},
			{
				name: 'locale', 
				type: FormFieldType.SELECT, 
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
		let { form } = event.detail;
		const username = form.getField('username').value;
		const password = form.getField('password').value;
		const language = form.getField('locale').value;
		try {
			isLoading = true;
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
				goto('/');
				return;
			}

			form.setFieldError('locale', 'Invalid credentials');
		} catch (err) {
			form.setFieldError('locale', err.message);
		}
		isLoading = false;
	}

	function onValueChange(event) {
		let { field } = event.detail;
		if (field.name === 'locale') {
			$locale = field.value;
		}
	}
</script>

{#if $session.portal}<img src={$session.portal.logo} alt="Logo" />{/if}
<Form 
	on:submit={login} 
	on:change={onValueChange}
	fieldsets={fieldsets} 
	isLoading={isLoading}
/>
