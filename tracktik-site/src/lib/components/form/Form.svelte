<script lang="ts">
    import type { Fieldset, FormField } from '$lib/@types/form.type';
    import { FormFieldType } from '$lib/@types/form.type';

    import { v4 as uuidv4 } from 'uuid';
    import { createEventDispatcher } from 'svelte';

    import { t } from '$lib/i18n';
    import Input from './Input.svelte';
    import Select from './Select.svelte';
    import LoadingBar from '$lib/components/LoadingBar.svelte';

    export let isLoading: boolean = false;
    export let error: string = '';
    export let fieldsets: Fieldset[] = [];

    let formId = uuidv4();
    let sanitizedFieldsets: Fieldset[] = [];
    $: sanitizedFieldsets = sanitizeFieldsets(fieldsets);
    
    const dispatch = createEventDispatcher();
    function onSubmit(event) {
        event.preventDefault();
        dispatch('submit', {
            form: {
                id: formId,
                fieldsets: sanitizedFieldsets,
                getField(name: string): FormField {
                    let foundField = undefined;
                    this.fieldsets.forEach(fieldset => {
                        fieldset.fields.forEach(field => {
                            if (field.name == name) {
                                foundField =  field;
                            }
                        });
                    });

                    return foundField;
                },
                setFieldError(name: string, error: string) {
                    this.fieldsets.forEach(fieldset => {
                        fieldset.fields.forEach(field => {
                            if (field.name == name) {
                                field.error = error;
                            }
                        });
                    });
                }
            }
        });
    }

    function onValueChange(field: FormField) {
        dispatch('change', {field});
    }

    function getComponentForField(field) {
        switch (field.type) {
            case FormFieldType.SELECT:
                return Select;
                break;
            default:
            case FormFieldType.TEXT:
            case FormFieldType.PASSWORD:
                return Input;
                break;
        }
    }

    function getComponentProps(field: FormField) {
        let props = JSON.parse(JSON.stringify(field));

        switch (field.type) {
            case FormFieldType.SELECT:
                delete props.type;
                break;
            default:
            case FormFieldType.TEXT:
                props.type = 'text';
                break;
            case FormFieldType.PASSWORD:
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
                <div class="wrapper-field {field.error ? 'error' : '' }">
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
        <slot name="submit"><input type="submit" value="{$t('common.form.submit')}" disabled={isLoading ? true : false} /></slot>
        {#if error}<div class="error">{error}</div>{/if}
        {/each}
    </form>
</div>
