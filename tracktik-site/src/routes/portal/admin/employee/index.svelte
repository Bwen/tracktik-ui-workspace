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
    import { getRegionOptions } from '$lib/js/utils';
    import { EmployeesItem } from '@rest/models/EmployeesItem';

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
    
    let statusOptions = [];
    for (const status in EmployeesItem.status) {
        statusOptions.push({
            text: status,
            value: status,
        });
    }
    statusOptions.sort((a, b) => a.text.localeCompare(b.text));

    let zoneOptions = [];
    let departmentOptions = [];
    const regionFilterOptions = getRegionOptions($session.auth.scopes.regions);
    let filterFields: Fieldset[] = [{
        fields: [
			{
				name: 'department',
				type: FieldType.SELECT,
                placeholder: 'Filter by Departement',
                allowReset: true,
				value: '',
				options: departmentOptions,
			},
			{
				name: 'zone',
				type: FieldType.SELECT,
                placeholder: 'Filter by Zone',
                allowReset: true,
				value: '',
				options: zoneOptions,
			},
			{
				name: 'status',
				type: FieldType.SELECT,
                placeholder: 'Filter by Status',
				value: '',
				options: statusOptions,
			},
			{
				name: 'region',
				type: FieldType.AUTOCOMPLETE,
                placeholder: 'Filter by Region',
				value: '',
				options: regionFilterOptions,
                includeChildsInSearch: true,
			},
			{
				name: 'q',
				type: FieldType.TEXT,
				value: '',
                placeholder: 'Type to filter'
			},
        ]
    }];

    request('/departments', METHODS.GET).then(res => {
        if (res && res.ok) {
            departmentOptions = [];
            res.json().then(result => {
                result.data.forEach(department => {
                    departmentOptions.push({
                        text: department.name,
                        value: department.id,
                    });
                });

                departmentOptions.sort((a, b) => a.text.localeCompare(b.text));
                filterFields[0].fields[0].options = departmentOptions;
            });
        }
    });

    request('/zones', METHODS.GET).then(res => {
        if (res && res.ok) {
            zoneOptions = [];
            res.json().then(result => {
                result.data.forEach(zone => {
                    zoneOptions.push({
                        text: zone.name,
                        value: zone.id,
                    });
                });

                zoneOptions.sort((a, b) => a.text.localeCompare(b.text));
                filterFields[0].fields[1].options = zoneOptions;
            });
        }
    });

    let perPage = 15;
    let totalEntries = 0;
    let offset = 0;
    let employees = [];
    let filters = {includeInactive: true, status: EmployeesItem.status.ACTIVE};
    async function fetchEmployees() {
        isLoading = true;
        let res = await request('/employees', METHODS.GET, {
            'include': 'region,region.address,address',
            'limit': perPage,
            'offset': offset,
            ...filters,
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

    async function onFilterChange(event) {
        const field = event.detail.field;
        if (field.name === 'q' && field.value.length !== 0 && field.value.length < 3) {
            return;
        }

        filters[field.name] = field.value;
        if (!field.value) {
            delete filters[field.name];
        }

        await fetchEmployees();
    }

    if (browser) {
        session.subscribe(async () => {
            await fetchEmployees();
        });

        (async () => await fetchEmployees())();
    }
</script>

<div class="content"><div class="content-inner">
    <div class="page-employee-list">
        <div class="filters"><Form fieldsets={filterFields} on:change={onFilterChange}><div slot="submit"></div></Form></div>
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
