<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faCogs } from "@fortawesome/free-solid-svg-icons";
    import Form from '$components/ext/form/Form.svelte';
    import { SnackType, addSnack } from '$lib/stores/snack-bar';
    import { pref } from '$lib/stores/cache';
    import { Fieldset, FieldType } from '$form';
    import { t } from '$lib/i18n';

    let filterFields: Fieldset[] = [
        {
            fields: [
                {
                    id: 'page-state',
                    name: $t('page.ui-controls.page-state.action'),
                    label: $t('page.ui-controls.page-state.label'),
                    type: FieldType.BUTTON,
                    tooltip: $t('page.ui-controls.page-state.tooltip'),
                },
                {
                    id: 'debug.ssr',
                    name: 'ssr',
                    label: $t('page.ui-controls.ssr.label'),
                    type: FieldType.SWITCH,
                    tooltip: $t('page.ui-controls.ssr.tooltip'),
                    value: $pref.debug.ssr,
                },
            ],
        }
    ];
    
    function onFormValueChange(event) {
        const { field } = event.detail;
        console.log('Form Value Change: ', field.id);

        if ('page-state' === field.id) {
            const portalDomain = localStorage.getItem('session:domain');
            clearAllStoragePrefix(`${portalDomain}:state`);
            addSnack({text: $t('page.ui-controls.page-state.success'), type: SnackType.Success});
        } else if ('debug.ssr' === field.id) {
            $pref.debug.ssr = field.value ? true : false;
            let state = field.value ? $t('common.enabled') : $t('common.disabled');
            addSnack({text: $t('page.ui-controls.ssr.success', {values: {state}}), type: SnackType.Success});
        }
    }

    function clearAllStoragePrefix(suffix: string) {
        let storageKeys = [];
        for (var i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).startsWith(suffix)) {
                storageKeys.push(localStorage.key(i));
            }
        }

        for (var i = 0; i < storageKeys.length; i++) {
            localStorage.removeItem(storageKeys[i]);
        }
    }
</script>

<section class="wrapper-ui-setting">
    <header><Fa icon={faCogs} />{$t('page.ui-controls.title')}</header>
    <section class="ui-setting">
        <Form fieldsets={filterFields} on:change={onFormValueChange}><div slot="submit"></div></Form>
    </section>
</section>

<style lang="scss">

</style>