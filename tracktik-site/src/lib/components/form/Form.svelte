<script lang="ts">
    import type { Fieldset, Field } from '$form';
    import { FieldType } from '$form';
    import { t } from '$lib/i18n';

    import { v4 as uuidv4 } from 'uuid';
    import { createEventDispatcher } from 'svelte';

    import Input from './Input.svelte';
    import Select from './Select.svelte';
    import LoadingBar from '$components/LoadingBar.svelte';
    import Link from '$components/Link.svelte';

    export let isLoading: boolean = false;
    export let error: string = '';
    export let fieldsets: Fieldset[] = [];

    let formId = uuidv4();
    let sanitizedFieldsets: Fieldset[] = [];
    $: sanitizedFieldsets = sanitizeFieldsets(fieldsets);

    const dispatch = createEventDispatcher();
    function onSubmit(event) {
        event.preventDefault();
        dispatch('submit', {formId, fieldsets: sanitizedFieldsets});
    }

    function onValueChange(field: Field) {
        dispatch('change', {field});
    }

    function getComponentForField(field: Field) {
        switch (field.type) {
            case FieldType.SELECT:
                return Select;
                break;
            default:
            case FieldType.TEXT:
            case FieldType.PASSWORD:
                return Input;
                break;
        }
    }

    function getComponentProps(field: Field) {
        let props = JSON.parse(JSON.stringify(field));
        delete props.validators;

        switch (field.type) {
            case FieldType.SELECT:
                delete props.type;
                break;
            default:
            case FieldType.TEXT:
                props.type = 'text';
                break;
            case FieldType.PASSWORD:
                props.type = 'password';
                break;
        }

        return props;
    }

    function sanitizeFieldsets(fieldsets: Fieldset[]): Fieldset[] {
        let fsets: Fieldset[] = [];
        fieldsets.forEach(fieldset => {
            let fset = {
                name: fieldset.name,
                legend: fieldset.legend,
                fields: [],
            };

            fieldset.fields.forEach(field => {
                let sanitizedField = field;
                if (!field.id) {
                    sanitizedField.id = formId +':'+ field.name;
                }

                fset.fields.push(sanitizedField);
            });

            fsets.push(fset);
        });

        return fsets;
    }
</script>

<div class="wrapper-form">
    <LoadingBar isLoading={isLoading} />
    <form on:submit={onSubmit} id={formId}>
        {#each sanitizedFieldsets as fieldset}
        <div class="wrapper-fieldset">
            <fieldset>
                {#if fieldset.legend}<legend>{fieldset.legend}</legend>{/if}
                {#each fieldset.fields as field}
                <div class="wrapper-field" class:error={field.error}>
                    <section>
                        {#if field.label}<label for="{field.id}">{field.label}</label>{/if}
                        <svelte:component 
                            this={getComponentForField(field)}
                            on:input={(event) => {
                                field.value = event.detail;
                                onValueChange(field);
                            }}
                            disabled={isLoading ? true : false}
                            {...getComponentProps(field)} 
                        />
                    </section>
                    {#if field.error}<div class="error">{field.error}</div>{/if}
                </div>
                {/each}
            </fieldset>
        </div>
        <slot name="submit">
            <Link on:link-click={onSubmit} css="btn submit {isLoading ? 'disabled' : ''}">{$t('common.form.submit')}</Link>
        </slot>
        {#if error}<div class="error">{error}</div>{/if}
        {/each}
    </form>
</div>
