<script lang="ts">
    import type { Fieldset, Field } from '$form';
    import { FieldType } from '$form';
    import { t } from '$lib/i18n';

    import { v4 as uuidv4 } from 'uuid';
    import { createEventDispatcher } from 'svelte';

    import Checkbox from './Checkbox.svelte';
    import Switch from './Switch.svelte';
    import Button from './Button.svelte';
    import Input from './Input.svelte';
    import Select from './Select.svelte';
    import Autocomplete from './Autocomplete.svelte';
    import CalendarMonth from '../CalendarMonth.svelte';
    import LoadingBar from '$components/ext/LoadingBar.svelte';

    export let isLoading: boolean = false;
    export let error: string = '';
    export let fieldsets: Fieldset[] = [];
    export let submitText: string = $t('common.form.submit');

    let formId = uuidv4();
    let sanitizedFieldsets: Fieldset[] = [];
    $: sanitizedFieldsets = sanitizeFieldsets(fieldsets);

    const dispatch = createEventDispatcher();
    export function onSubmit(event) {
        event.preventDefault();
        dispatch('submit', {formId, fieldsets: sanitizedFieldsets});
    }

    function onKeyup(field, value) {
        dispatch('keyup', {field, value});
    }

    function onValueChange(field: Field) {
        dispatch('change', {field});
    }

    function getComponentForField(field: Field) {
        switch (field.type) {
            case FieldType.SWITCH:
                return Switch;
            case FieldType.CHECKBOX:
                return Checkbox;
            case FieldType.BUTTON:
                return Button;
            case FieldType.SELECT:
                return Select;
            case FieldType.AUTOCOMPLETE:
                return Autocomplete;
            case FieldType.CALENDAR:
                return CalendarMonth;
            default:
            case FieldType.TEXT:
            case FieldType.PASSWORD:
                return Input;
        }
    }

    function getComponentProps(field: Field) {
        let props = JSON.parse(JSON.stringify(field));

        switch (field.type) {
            case FieldType.CHECKBOX:
            case FieldType.SWITCH:
            case FieldType.BUTTON:
            case FieldType.SELECT:
                delete props.isPicker;
            case FieldType.CALENDAR:
                delete props.isLoading;
            case FieldType.AUTOCOMPLETE:
                delete props.type;
                delete props.autocomplete;
                break;
            default:
            case FieldType.TEXT:
                delete props.isLoading;
                delete props.isPicker;
                props.type = 'text';
                break;
            case FieldType.PASSWORD:
                delete props.isLoading;
                delete props.isPicker;
                props.type = 'password';
                break;
        }

        delete props.initial_value;
        delete props.validators;
        delete props.tooltip;
        delete props.label;
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
                
                if (!field.initial_value) {
                    field.initial_value = field.value;
                }

                fset.fields.push(sanitizedField);
            });

            fsets.push(fset);
        });

        return fsets;
    }

    function getTooltipAttribute(field: Field) {
        if (field.tooltip) {
            return {"data-tooltip": field.tooltip};
        }

        return {};
    }
</script>

<div class="wrapper-form">
    <LoadingBar isLoading={isLoading} />
    <form on:submit={onSubmit} id={formId}>
        {#each sanitizedFieldsets as fieldset}
        <div class="wrapper-fieldset" data-name={fieldset.name ?? ''}>
            <fieldset>
                {#if fieldset.legend}<legend>{fieldset.legend}</legend>{/if}
                {#each fieldset.fields as field}
                <div class="wrapper-field" class:error={field.error}>
                    <section>
                        {#if field.label}<label for="{field.id}" {...getTooltipAttribute(field)}>{field.label}</label>{/if}
                        <svelte:component
                            this={getComponentForField(field)}
                            on:keyup={(event) => onKeyup(field, event.detail)}
                            on:input={(event) => {
                                field.value = event.detail;
                                if (field.type === FieldType.CHECKBOX) {
                                    field.value = event.detail.value;
                                    field.checked = event.detail.checked;
                                }
                                onValueChange(field);
                            }}
                            disabled={isLoading}
                            {...getComponentProps(field)}
                        />
                    </section>
                    {#if field.error}<div class="error">{field.error}</div>{/if}
                </div>
                {/each}
            </fieldset>
        </div>
        {#if error}<div class="error">{error}</div>{/if}
        {/each}
        <slot name="submit">
            <button type="submit" on:click={onSubmit} class:disabled={isLoading} disabled={isLoading}>{submitText}</button>
        </slot>
    </form>
</div>

<style lang="css">
    .wrapper-form [type="submit"] {
        cursor: pointer;
    }

    .wrapper-form label {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>
