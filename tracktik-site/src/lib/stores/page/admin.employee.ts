import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset } from '$form';
import Phone from '$components/ext/Phone.svelte';
import Checkbox from '$components/ext/form/Checkbox.svelte';
import UID from '$components/UID.svelte';
import Link from '$components/ext/Link.svelte';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { t } from '$lib/i18n';
import { getRegionOptions } from '$lib/js/utils';
import { request, METHODS } from '$lib/js/restClient';
import { EmployeesItem } from '@rest/models/EmployeesItem';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';

const $t = get(t);

const KEY_PREFIX = 'admin.employee';
const KEY_STATE = `${KEY_PREFIX}:state`;

let initialPageState: PageState = {
    tableData: {perPage: 15, offset: 0}, 
    filters: {
        includeInactive: true, 
        status: EmployeesItem.status.ACTIVE,
        forAllAccountAssignments: {zone: undefined, department: undefined},
    },
};

if (browser && sessionStorage.getItem(KEY_STATE) !== null) {
    initialPageState = JSON.parse(sessionStorage.getItem(KEY_STATE));
}

export const pageState = writable(initialPageState);
pageState.subscribe(value => browser ? sessionStorage.setItem(KEY_STATE, JSON.stringify(value)) : undefined);

export function getTableDataColumns() {
    return [
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
}

async function getDepartmentOptions() {
    let res = await request('/departments', METHODS.GET, {include: 'region'});
    if (res && res.ok) {
        let departmentOptions = [];
        let result = await res.json();
        result.data.forEach(department => {
            departmentOptions.push({
                text: `${department.region.name} / ${department.name}`,
                value: department.id,
            });
        });

        departmentOptions.sort((a, b) => a.text.localeCompare(b.text));
        return departmentOptions;
    }
}

async function getZoneOptions() {
    let res = await request('/zones', METHODS.GET, {include: 'region'})
    if (res && res.ok) {
        let zoneOptions = [];
        let result = await res.json();
        result.data.forEach(zone => {
            zoneOptions.push({
                text: `${zone.region.name} / ${zone.name}`,
                value: zone.id,
            });
        });

        zoneOptions.sort((a, b) => a.text.localeCompare(b.text));
        return zoneOptions;
    }
}

function getStatusOptions() {
    let statusOptions = [];
    for (const status in EmployeesItem.status) {
        statusOptions.push({
            text: status,
            value: status,
        });
    }
    statusOptions.sort((a, b) => a.text.localeCompare(b.text));

    return statusOptions;
}

export async function getFiltersFieldset(session): Promise<Fieldset[]> {
    return new Promise(async resolve => {
        const $pageState = get(pageState);
        const departmentFilterValue = $pageState.filters.forAllAccountAssignments.department ?? '';
        const zoneFilterValue = $pageState.filters.forAllAccountAssignments.zone ?? '';
        const filterStatusValue = $pageState.filters.status ?? '';
        const filterRegionValue = $pageState.filters.region ?? '';
        const filterKeywordValue = $pageState.filters.q ?? '';
        resolve([{
            fields: [
                {
                    name: 'department',
                    type: FieldType.AUTOCOMPLETE,
                    placeholder: $t('page.employee.filters.department'),
                    value: departmentFilterValue,
                    options: await getDepartmentOptions(),
                },
                {
                    name: 'zone',
                    type: FieldType.AUTOCOMPLETE,
                    placeholder: $t('page.employee.filters.zone'),
                    value: zoneFilterValue,
                    options: await getZoneOptions(),
                },
                {
                    name: 'status',
                    type: FieldType.SELECT,
                    placeholder: $t('page.employee.filters.status'),
                    value: filterStatusValue,
                    options: getStatusOptions(),
                },
                {
                    name: 'region',
                    type: FieldType.AUTOCOMPLETE,
                    placeholder: $t('page.employee.filters.region'),
                    value: filterRegionValue,
                    includeChildsInSearch: true,
                    options: getRegionOptions(session.auth.scopes.regions),
                },
                {
                    name: 'q',
                    type: FieldType.TEXT,
                    value: filterKeywordValue,
                    placeholder: $t('page.employee.filters.keyword'),
                },
            ]
        }]);
    });
}


