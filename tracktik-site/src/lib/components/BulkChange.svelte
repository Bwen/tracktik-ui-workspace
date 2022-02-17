<script lang="ts">
    import { onDestroy } from 'svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
	import { t } from '$lib/i18n';
    import { session } from '$app/stores';
    import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import { getStatusOptions } from '$lib/stores/page/employee.list';
    import { getRegionOptions } from '$lib/js/utils';
    import Form from '$components/ext/form/Form.svelte';
    import { Fieldset, FieldType } from '$form';

    export let id: string = '';
    export let icon: IconDefinition = null;
    export let title: string;
    export let effectedEntries: number = 0;
    export let filters: any = {};

    let actionFields: Fieldset[] = [
        {
            fields: [
                {
                    id: 'action-status',
                    name: 'action',
                    label: 'Status & Force Password',
                    type: FieldType.CHECKBOX,
                    value: '1',
                    checked: false,
                },
                {
                    id: 'action-region',
                    name: 'action',
                    label: 'Change Main Region',
                    type: FieldType.CHECKBOX,
                    value: '1',
                    checked: false,
                },
                {
                    id: 'action-assign-site',
                    name: 'action',
                    label: 'Assign To Site or Zone',
                    type: FieldType.CHECKBOX,
                    value: '1',
                    checked: false,
                },
                {
                    id: 'action-assign-rate',
                    name: 'action',
                    label: 'Assign To Employee Class Rate',
                    type: FieldType.CHECKBOX,
                    value: '1',
                    checked: false,
                },
            ],
        }
    ];
    
    const steps: any =  [
        {
            label: 'Pick Actions',
            type: 'form',
            fieldsets: actionFields,
            onSubmit: onActionPick,
            submitText: 'Next',
        },
        {
            label: 'Set Changes',
            type: 'form',
            fieldsets: [
                {
                    name: 'action-status',
                    fields: [
                        {
                            name: 'change-status',
                            type: FieldType.SELECT,
                            label: 'Status',
                            placeholder: $t('common.filters.status'),
                            value: '',
                            options: getStatusOptions(),
                        },
                        {
                            name: 'change-password',
                            label: 'Force Password Change',
                            type: FieldType.CHECKBOX,
                            value: '1',
                            checked: false,
                        },
                    ]
                },
                {
                    name: 'action-region',
                    fields: [
                        {
                            name: 'region',
                            type: FieldType.AUTOCOMPLETE,
                            label: 'Region',
                            placeholder: $t('common.filters.region'),
                            value: '',
                            includeChildsInSearch: true,
                            options: getRegionOptions($session.auth.scopes.regions),
                        },
                    ]
                },
                {
                    name: 'action-assign-site',
                    fields: [
                        {
                            name: 'assign-site',
                            type: FieldType.AUTOCOMPLETE,
                            label: 'Site or Zone',
                            placeholder: $t('common.filters.siteOrZone'),
                            value: '',
                            options: getRegionOptions($session.auth.scopes.regions),
                        },
                    ]
                },
                {
                    name: 'action-assign-rate',
                    fields: [
                        {
                            name: 'assign-rate',
                            type: FieldType.AUTOCOMPLETE,
                            label: 'Employee Class Rate',
                            placeholder: $t('common.filters.employeeClass'),
                            value: '',
                            includeChildsInSearch: true,
                            options: getRegionOptions($session.auth.scopes.regions),
                        },
                    ]
                },
            ],
            onSubmit: onActionPick,
            submitText: 'Next',
        },
        {
            label: 'Confirm Changes',
            type: 'info',
            onSubmit: onStepSubmit,
            submitText: 'Confirm',
        },
        {
            label: 'Processing',
            type: 'info',
            onSubmit: onStepSubmit,
            submitText: 'Test',
        },
    ];

    let currentStep = 0;
    function onActionPick(event) {
        const selectedActions = [];
        let fields = event.detail.fieldsets[0].fields;
        fields.forEach(field => {
            if (field.checked) {
                selectedActions.push(field.id);
            }
        });

        if (!selectedActions.length) {
            return;
        }

        currentStep += 1;
    }

    function onStepSubmit(event) {
        console.log('onStepSubmit', event);
        currentStep += 1;
    }

    function onPreviousStep(event) {
        currentStep -= 1;
    }

    onDestroy(() => {
        currentStep = 0;
    });
</script>

<div class="wrapper-bulk-change">
    <header>{#if icon}<Fa icon={icon} />{/if}{title}</header>
    <div class="info"><Fa icon={faInfoCircle} />Number of entries that will be affected <strong>{effectedEntries}</strong></div>
    <section class="bulk-change">
    {#each steps as step, i}
        {#if step.type === 'form'}
        <div class="step" class:active={currentStep == i}>
            <h2>{step.label}</h2>
            <Form fieldsets={step.fieldsets} on:submit={step.onSubmit}>
                <div slot="submit">
                    {#if i > 0}<button type="button" on:click={onPreviousStep}>Previous</button>{/if}
                    <button type="submit" on:click={Form.onSubmit}>{step.submitText}</button>
                </div>
            </Form>
        </div>
        {:else}
        <div class="step" class:active={currentStep == i}>
            <h2>{step.label}</h2>
            <div class="content">
                test - {i}
            </div>
            <div class="submit">
                {#if i > 0}<button type="button" on:click={onPreviousStep}>Previous</button>{/if}
                <!--  class:disabled={step.isLoading} disabled={step.isLoading} -->
                <button type="button" on:click={step.onSubmit}>Next</button>
            </div>
        </div>
        {/if}
    {/each}
    </section>
</div>

<style lang="css">
    .wrapper-bulk-change {
        position: relative;
    }

    .wrapper-bulk-change .step {
        display: none;
        background-color: rgb(var(--content-bg));
    }

    .wrapper-bulk-change .step.active {
        display: block;
    }

    .wrapper-bulk-change .content,
    .wrapper-bulk-change :global(.wrapper-fieldset) {
        padding: 0 1em;
    }

    .wrapper-bulk-change :global(.wrapper-field) {
        padding: 4px;
    }

    .wrapper-bulk-change h2 {
        margin: 0;
        padding: .5em .25em;
    }

    .wrapper-bulk-change .info {
        padding: .5em;
        color: rgb(var(--info-text));
        background-color: rgb(var(--info-bg), 75%);
        line-height: 2em;
        text-align: center;
    }

    .wrapper-bulk-change .info strong {
        font-size: 2em;
        vertical-align: middle;
        margin-top: -0.25em;
        display: inline-block;
    }

    .wrapper-bulk-change .info :global(svg) {
        font-size: 1.5em;
        vertical-align: -.25em !important;
        margin-right: .25em;
    }

    .wrapper-bulk-change :global(label[for*="change-status"]) {
        transform: translateY(-9px);
    }
    
    .wrapper-bulk-change :global(label[for*="change-password"]) {
        transform: translateY(-4px);
    }
    
    .wrapper-bulk-change :global(label) {
        width: 225px;
        display: inline-block;
    }
    
    .wrapper-bulk-change :global(.wrapper-checkbox) {
        display: inline-block;
    }

    .wrapper-bulk-change .submit,
    .wrapper-bulk-change :global([slot="submit"]) {
        margin-top: 1em;
        padding: .5em;
        text-align: right;
        border-top: 1px solid rgb(var(--content-border));
        background-color: rgb(var(--content-bg-light), 75%);
    }
</style>
