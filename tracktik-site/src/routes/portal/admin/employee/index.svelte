<script lang="ts">
	import { request, METHODS } from '$lib/js/restClient';
    import TableData from '$components/ext/TableData.svelte';
    import Phone from '$components/ext/Phone.svelte';
    import Checkbox from '$components/ext/form/Checkbox.svelte';
    import UID from '$components/UID.svelte';
    import Link from '$components/ext/Link.svelte';
    import { browser } from '$app/env';
    import { faPhone } from "@fortawesome/free-solid-svg-icons";
	import { t } from '$lib/i18n';
    import Form from '$lib/components/ext/form/Form.svelte';
    import { Manager, FieldType } from '$form';
    import { session } from '$app/stores';
    import type { Fieldset } from '$form';

    let isLoading = false;
    let columns = [
        {css: "cell-checkbox",
            component: Checkbox, 
            componentProps: [
                {name: 'value', key: 'id'},
                {name: 'name', raw: 'employeIds'},
            ]
        },
        {css: 'cell-region', key: 'region.name', text: $t('page.employee.list.region')},
        {text: 'UID', css: 'cell-uid',
            component: UID, 
            componentProps: [
                {name: 'uid', key: 'customId'},
            ]
        },
        {css: 'cell-name', text: $t('page.employee.list.name'),
            component: Link,
            componentProps: [
                {name: 'text', key: 'firstName,lastName'},
                {name: 'href', raw: '/portal/admin/employee/{id}'},
            ]
        },
        {key: 'jobTitle', text: $t('page.employee.list.title')},
        {css: 'cell-phone', text: $t('page.employee.list.phone'),
            component: Phone, 
            componentProps: [
                {name: 'phone', key: 'primaryPhone'},
                {name: 'defaultCountry', key: 'region.address.country'},
                {name: 'country', key: 'address.country'},
                {name: 'icon', raw: faPhone},
            ]
        },
    ];
    
    const regionFilterOptions = [];
    for (let i=0; i < $session.auth.scopes.regions.length; i++) {
        const region = $session.auth.scopes.regions[i];
        regionFilterOptions.push({
            value: region.id,
            text: region.name,
        });
    }
    let filterFields: Fieldset[] = [{
        fields: [
			{
				name: 'departement',
				type: FieldType.SELECT,
				value: '',
				options: [
				]
			},
			{
				name: 'zone',
				type: FieldType.SELECT,
				value: '',
				options: [
				]
			},
			{
				name: 'status',
				type: FieldType.SELECT,
				value: '',
				options: [
				]
			},
			{
				name: 'region',
				type: FieldType.SELECT,
                placeholder: 'Filter by Region',
				value: '',
				options: regionFilterOptions
			},
			{
				name: 'keyword',
				type: FieldType.TEXT,
				value: '',
                placeholder: 'Type to filter'
			},
        ]
    }];

    let perPage = 15;
    let totalEntries = 0;
    let offset = 0;
    let employees = [];
    async function fetchEmployees() {
        isLoading = true;
        let res = await request('/employees', METHODS.GET, {
            'include': 'region,region.address,address',
            'limit': perPage,
            'offset': offset,
        });

        if (res.ok) {
            let result = await res.json();
            totalEntries = result.meta.count;
            offset = result.meta.offset;
            employees = result.data;
        }

        isLoading= false;
    }

    async function onPerPageChange(event) {
        perPage = event.detail.perPage;
        await fetchEmployees();
    }

    async function onPageChange(event) {
        offset = event.detail.pageNumber * perPage;
        await fetchEmployees();
    }

    if (browser) {
        (async () => await fetchEmployees())();
    }
</script>

<div class="content"><div class="content-inner">
    <div class="page-employee-list">
        <div class="filters"><Form fieldsets={filterFields} /></div>
        <TableData 
            columns={columns}
            entries={employees}
            isLoading={isLoading}
            perPage={perPage}
            totalEntries={totalEntries}
            on:page-change={onPageChange}
            on:per-page-change={onPerPageChange}
            uid="id"
        />
    </div>
</div></div>

<style lang="css">
    .page-employee-list .filters {
        padding: .5em;
    }

    .page-employee-list :global(.wrapper-table-data) {
        font-size: .75em;
    }

    .page-employee-list :global(.cell-checkbox) {
        width: 1%;
    }

    .page-employee-list :global(.cell-uid) {
        width: 5%;
    }

    .page-employee-list :global(.cell-phone) {
        width: 10%;
    }

    .page-employee-list :global(.cell-region) {
        width: 15%;
    }

    .page-employee-list :global(td.cell-phone) {
        text-align: center;
    }
</style>
