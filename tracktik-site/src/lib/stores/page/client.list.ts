import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset, Field } from '$form';
import Phone from '$components/ext/Phone.svelte';
import Checkbox from '$components/ext/form/Checkbox.svelte';
import UID from '$components/UID.svelte';
import Link from '$components/ext/Link.svelte';
import Avatar from '$components/Avatar.svelte';
import ClientType from '$components/ClientType.svelte';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { t } from '$lib/i18n';
import { getRegionOptions } from '$lib/js/utils';
import { EmployeesItem } from '@rest/models/EmployeesItem';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';
import type {ColumnDefinition} from '$lib/@types/TableData.type';
import { zones } from '../cache';

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
    const KEY = `${portalDomain}:state:client.list`;
    const savedState = JSON.parse(localStorage.getItem(KEY));
    if (savedState) {
        initialPageState = savedState;
    }
}

export const pageState = writable(initialPageState);
pageState.subscribe(value => {
    if (browser) {
        const portalDomain = localStorage.getItem('session:domain');
        const KEY = `${portalDomain}:state:client.list`;
        localStorage.setItem(KEY, JSON.stringify(value));
    }

    return undefined;
});

export function getTableDataColumns(session) {
    let columns: ColumnDefinition[] = [
        {css: "cell-checkbox",
            component: Checkbox, 
            componentProps: [
                {name: 'value', key: 'id'},
                {name: 'name', raw: 'employeIds'},
            ]
        },
    ];

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
        {css: 'cell-type', text: $t('common.company'),
            component: ClientType,
            componentProps: [
                {name: 'type', key: 'type'},
            ]
        },
        {css: 'cell-company', text: $t('common.company'),
            component: Link,
            componentProps: [
                {name: 'text', key: 'company'},
                {name: 'href', raw: '/portal/admin/client/{id}'},
            ]
        },
        {key: 'address.addressLine1', text: $t('common.address')},
        {key: 'address.city', text: $t('common.city')},
        {key: 'firstName,lastName', text: $t('common.mainContact')},
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

        let valueStatus = '';
        let valueZone = '';
        let valueDepartment = '';
        let valueRegion = '';
        let valueKeyword = '';
        if ($pageState && $pageState.filters) {
            valueStatus = $pageState.filters.status ?? '';
            valueZone = $pageState.filters.forAllAccountAssignments.zone ?? '';
            valueDepartment = $pageState.filters.forAllAccountAssignments.department ?? '';
            valueRegion = $pageState.filters.region ?? '';
            valueKeyword = $pageState.filters.q ?? '';
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

        resolve([{fields}]);
    });
}


