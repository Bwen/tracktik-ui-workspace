import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset, Field } from '$form';
import Phone from '$components/ext/Phone.svelte';
import Checkbox from '$components/ext/form/Checkbox.svelte';
import UID from '$components/UID.svelte';
import Link from '$components/ext/Link.svelte';
import Avatar from '$components/Avatar.svelte';
import ClientType from '$components/ClientType.svelte';
import { t } from '$lib/i18n';
import { getRegionOptions } from '$lib/js/utils';
import { ClientsItem } from '@rest/models/ClientsItem';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';
import type {ColumnDefinition} from '$lib/@types/TableData.type';
import { faPhone, faUsers, faUserClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { zones } from '../cache';

const $t = get(t);

let initialPageState: PageState = {
    tableData: {perPage: 15, offset: 0}, 
    filters: {
        includeInactive: true, 
        status: ClientsItem.status.ACTIVE,
        zone: undefined,
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

export function getCounters() {
    return {
        active: {
            count: 0,
            isLoading: false,
            filter: {},
            field: null,
            icon: faUsers,
            text: 'Active Clients',
        },
        inactive: {
            count: 0,
            isLoading: false,
            filter: {inactive: true},
            field: [1,1],
            icon: faStopwatch,
            text: 'Inactive Clients',
        },
        clockedIn: {
            count: 0,
            isLoading: false,
            filter: {clockedIn: true},
            field: [1,0],
            icon: faUserClock,
            text: 'Clocked-In Clients',
        },
    };
}

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
    for (const status in ClientsItem.status) {
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
        let valueRegion = '';
        let valueKeyword = '';
        let checkedClockedIn = false;
        let checkedInactive = false;
        if ($pageState && $pageState.filters) {
            valueStatus = $pageState.filters.status ?? '';
            valueZone = $pageState.filters.zone ?? '';
            valueRegion = $pageState.filters.region ?? '';
            valueKeyword = $pageState.filters.q ?? '';
            checkedClockedIn = $pageState.filters.clockedIn ?? false;
            checkedInactive = $pageState.filters.inactive ?? false;
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

        let fieldsets = [{fields}];
        fieldsets.push({
            fields: [
                {
                    id: 'client-list-filter-clocked-in',
                    name: 'clockedIn',
                    type: FieldType.CHECKBOX,
                    value: 1,
                    label: 'Clocked-in',
                    checked: checkedClockedIn,
                },
                {
                    id: 'client-list-filter-inactive',
                    name: 'inactive',
                    type: FieldType.CHECKBOX,
                    value: 1,
                    label: 'Inactive',
                    checked: checkedInactive,
                }
            ]
        });

        resolve(fieldsets);
    });
}


