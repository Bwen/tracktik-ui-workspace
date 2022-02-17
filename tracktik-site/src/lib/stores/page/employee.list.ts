import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset, Field } from '$form';
import Phone from '$components/ext/Phone.svelte';
import UID from '$components/UID.svelte';
import Avatar from '$components/Avatar.svelte';
import Link from '$components/ext/Link.svelte';
import { getRegionOptions } from '$lib/js/utils';
import { EmployeesItem } from '@rest/models/EmployeesItem';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';
import type {ColumnDefinition} from '$lib/@types/TableData.type';
import { departments, zones } from '../cache';
import { faPhone, faUsers, faUserClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { t } from '$lib/i18n';

const $t = get(t);

let initialPageState: PageState = {
    tableData: {perPage: 15, offset: 0}, 
    filters: {
        includeInactive: true, 
        status: EmployeesItem.status.ACTIVE,
        forAllAccountAssignments: {zone: undefined, department: undefined},
    },
};

if (browser) {
    const portalDomain = localStorage.getItem('session:domain');
    const KEY = `${portalDomain}:state:employee.list`;
    const savedState = JSON.parse(localStorage.getItem(KEY));
    if (savedState) {
        initialPageState = savedState;
    }
}

export const pageState = writable(initialPageState);
pageState.subscribe(value => {
    if (browser) {
        const portalDomain = localStorage.getItem('session:domain');
        const KEY = `${portalDomain}:state:employee.list`;
        localStorage.setItem(KEY, JSON.stringify(value));
    }

    return undefined;
});

export function getCounters() {
    return {
        active: {
            count: 0,
            isLoading: false,
            filter: {},
            field: null,
            icon: faUsers,
            text: $t('page.employee.list.counters.active'),
        },
        inactive: {
            count: 0,
            isLoading: false,
            filter: {inactive: true},
            field: [1,1],
            icon: faStopwatch,
            text: $t('page.employee.list.counters.inactive'),
        },
        clockedIn: {
            count: 0,
            isLoading: false,
            filter: {clockedIn: true},
            field: [1,0],
            icon: faUserClock,
            text: $t('page.employee.list.counters.clocked'),
        },
    };
}

export function getTableDataColumns(session) {
    let columns: ColumnDefinition[] = [];

    if (session.auth.scopes.regions.length > 1) {
        columns.push({css: 'cell-region', key: 'region.name', text: $t('common.region')});
    }

    columns = columns.concat([
        {text: 'UID', css: 'cell-uid',
            component: UID, 
            componentProps: [
                {name: 'uid', key: 'customId'},
            ]
        },
        {css: 'cell-avatar',
            component: Avatar, 
            componentProps: [
                {name: 'img', key: 'avatar'},
            ]
        },
        {css: 'cell-name', text: $t('common.name'),
            component: Link,
            componentProps: [
                {name: 'text', key: 'firstName,lastName'},
                {name: 'href', raw: '/portal/admin/employee/{id}'},
            ]
        },
        {key: 'jobTitle', text: $t('common.title')},
        {css: 'cell-phone', text: $t('common.phone'),
            component: Phone, 
            componentProps: [
                {name: 'phone', key: 'primaryPhone'},
                {name: 'defaultCountry', key: 'region.address.country'},
                {name: 'country', key: 'address.country'},
                {name: 'icon', raw: faPhone},
            ]
        },
    ]);

    return columns;
}

async function getDepartmentOptions(regions) {
    const deps = await get(await departments);
    let departmentOptions = [];
    for (const i in deps) {
        const department = deps[i];
        let text = department.name;
        if (regions.length > 1) {
            text = `${department.region.name} / ${text}`;
        }

        departmentOptions.push({text, value: department.id});
    }

    departmentOptions.sort((a, b) => a.text.localeCompare(b.text));
    return departmentOptions;
}

async function getZoneOptions(regions) {
    const zons = await get(await zones);
    let zoneOptions = [];
    for (const i in zons) {
        const zone = zons[i];
        let text = zone.name;
        if (regions.length > 1) {
            text = `${zone.region.name} / ${text}`;
        }

        zoneOptions.push({text, value: zone.id});
    }

    zoneOptions.sort((a, b) => a.text.localeCompare(b.text));
    return zoneOptions;
}

export function getStatusOptions() {
    let statusOptions = [];
    for (const status in EmployeesItem.status) {
        statusOptions.push({
            text: $t(`common.statuses.${status}`),
            value: status,
        });
    }
    statusOptions.sort((a, b) => a.text.localeCompare(b.text));

    return statusOptions;
}

export async function getFiltersFieldset(session): Promise<Fieldset[]> {
    return new Promise(async resolve => {
        const $pageState = get(pageState);

        let valueStatus = '';
        let valueZone = '';
        let valueDepartment = '';
        let valueRegion = '';
        let valueKeyword = '';
        let checkedInactive = false;
        let checkedClockedIn = false;
        if ($pageState && $pageState.filters) {
            valueStatus = $pageState.filters.status ?? '';
            valueZone = $pageState.filters.forAllAccountAssignments.zone ?? '';
            valueDepartment = $pageState.filters.forAllAccountAssignments.department ?? '';
            valueRegion = $pageState.filters.region ?? '';
            valueKeyword = $pageState.filters.q ?? '';
            checkedInactive = $pageState.filters.inactive ?? false;
            checkedClockedIn = $pageState.filters.clockedIn ?? false;
        }
        let fields: Field[] = [];
        let zoneOptions = await getZoneOptions(session.auth.scopes.regions);
        if (zoneOptions.length) {
            fields.unshift({
                name: 'zone',
                type: FieldType.AUTOCOMPLETE,
                placeholder: $t('common.filters.zone'),
                value: valueZone,
                options: zoneOptions,
            });
        }

        let depOptions = await getDepartmentOptions(session.auth.scopes.regions);
        if (depOptions.length) {
            fields.unshift({
                name: 'department',
                type: FieldType.AUTOCOMPLETE,
                placeholder: $t('common.filters.department'),
                value: valueDepartment,
                options: depOptions,
            });
        }

        if (session.auth.scopes.regions.length > 1) {
            fields.push({
                name: 'region',
                type: FieldType.AUTOCOMPLETE,
                placeholder: $t('common.filters.region'),
                value: valueRegion,
                includeChildsInSearch: true,
                options: getRegionOptions(session.auth.scopes.regions),
            });
        }

        fields.push({
            name: 'status',
            type: FieldType.SELECT,
            placeholder: $t('common.filters.status'),
            value: valueStatus,
            options: getStatusOptions(),
        });

        fields.push({
            name: 'q',
            type: FieldType.TEXT,
            value: valueKeyword,
            placeholder: $t('common.filters.keyword'),
        });

        let fieldsets = [{fields}];
        fieldsets.push({
            fields: [
                {
                    id: 'employee-list-filter-clocked-in',
                    name: 'clockedIn',
                    type: FieldType.CHECKBOX,
                    value: 1,
                    label: $t('common.clocked-in'),
                    checked: checkedClockedIn,
                },
                {
                    id: 'employee-list-filter-inactive',
                    name: 'inactive',
                    type: FieldType.CHECKBOX,
                    value: 1,
                    label: $t('common.inactive'),
                    checked: checkedInactive,
                }
            ]
        });

        resolve(fieldsets);
    });
}


