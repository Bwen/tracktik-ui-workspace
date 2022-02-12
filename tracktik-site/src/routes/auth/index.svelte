<script type="ts">
	import { onDestroy, onMount} from 'svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { clientIp } from '$lib/stores/clientIp';

	import { t, locale } from '$lib/i18n';
    import type { Fieldset } from '$form';
    import { Manager, FieldType } from '$form';
	import Form from '$components/ext/form/Form.svelte';
	import { request, METHODS } from '$lib/js/restClient';
    import { isNotBlank } from '$form/FieldValidator';

    import Fa from 'svelte-fa/src/fa.svelte';
    import { faUserLock } from "@fortawesome/free-solid-svg-icons";

	// TODO: Implement Force Password Change, dont forget to change sentinel server side

	const signInScreen = $session.portal.signInScreen;
	let usernamePlaceholder = $t('page.auth.enter_username');
	let passwordPlaceholder = $t('page.auth.enter_password');
	if (signInScreen) {
		usernamePlaceholder = signInScreen.userPlaceholder;
		passwordPlaceholder = signInScreen.passwordPlaceholder;
	}

	let isLoading = false;
	let fieldsets: Fieldset[] = [{
		fields: [
			{
				name: 'username', 
				type: FieldType.TEXT, 
				value: '', 
				placeholder: usernamePlaceholder, 
				autocomplete: 'username',
				validators: [isNotBlank]
			},
			{
				name: 'password', 
				type: FieldType.PASSWORD, 
				value: '', 
				placeholder: passwordPlaceholder, 
				autocomplete: 'current-password',
				validators: [isNotBlank]
			},
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

			let ipResponse = await fetch('https://api.ipify.org?format=json');
			if (ipResponse.ok) {
				const { ip } = await ipResponse.json();
				$clientIp = ip;
			}

			let res = await request('/auth', METHODS.POST, { username, password, language });
			if (res.ok) {
				const response = await res.json();
				$locale = language;
				$session.locale = language;
				$session.auth = {
					portal: response.auth.portal,
					permissions: response.auth.permissions,
					pref: response.pref,
					scopes: response.scopes,
					user: response.user,
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

	let imageSlideInterval = null;
	let imageSlideFadeOut = true;
	let slideImage1;
	onMount(() => {
		imageSlideInterval = setInterval(() => {
			if (imageSlideFadeOut) {
				slideImage1.style.opacity = 0;
				imageSlideFadeOut = false;
			} else {
				slideImage1.style.opacity = 1;
				imageSlideFadeOut = true;
			}
		}, 5000);
	});

	onDestroy(() => {
		clearInterval(imageSlideInterval);
	});
</script>

{#if signInScreen}
<div class="form-signin-screen" style='background-color: {signInScreen.backgroundColor}'>
	<div class="image-slides">
		<div style="background-image: url({signInScreen.slideImages[0]})" />
		<div style="background-image: url({signInScreen.slideImages[1]})" bind:this={slideImage1} />
	</div>
	<div class="login">
		<div class="form-login"
			in:fly="{{ y: -50, duration: 250, delay: 300 }}"
			out:fly="{{ y: -50, duration: 250 }}"
		>
			{#if $session.portal}<img src={$session.portal.logo} alt="Logo" />{/if}
			<header style="color: {signInScreen.textHeaderColor};">{signInScreen.loginTitle}</header>
			{#if signInScreen.loginBlurb}<i style="color: {signInScreen.textBlurbColor};">{signInScreen.loginBlurb}</i>{/if}
			<Form
				on:submit={login}
				on:change={onValueChange}
				fieldsets={fieldsets}
				isLoading={isLoading}
				submitText={signInScreen.buttonLabel}
			>
			<div slot="submit">
				<button type="submit" style="background-color: {signInScreen.buttonBackground}"
					on:click={Form.onSubmit} 
					class:disabled={isLoading} 
					disabled={isLoading}
				>
					<Fa icon={faUserLock} />
					{signInScreen.buttonLabel}
				</button>
			</div>
			</Form>
		</div>
	</div>
</div>
{:else}
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
{/if}

<style lang="css">
	.form-signin-screen {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.form-signin-screen header {
		font-size: 1.15em;
		font-weight: bold;
		margin-bottom: .5em;
	}

	.form-signin-screen i {
		font-size: .75em;
		margin-bottom: 1em;
	}

	.form-signin-screen .image-slides {
		flex-grow: 4;
		height: 100%;
		width: 100%;
		position: relative;
	}
	
	.form-signin-screen .image-slides > div {
		background-size: cover;
		background-position: 50% 50%;
		transition: opacity 3s ease-in-out;
		height: 100%;
		width: 100%;
		position: absolute;
	}

	.form-signin-screen .login {
		padding: 0 8%;
		align-items: center;
		text-align: center;
	}

	:global([media="medium"]) .form-signin-screen .login {
		padding: 0 2%;
	}

	:global([media="large"]) .form-signin-screen .login {
		padding: 0 5%;
	}

	:global([media="small"]) .form-signin-screen .login {
		padding: 0;
	}

	.form-login :global(form) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form-signin-screen .login .form-login,
	.form-login img {
		width: 300px;
	}
</style>
