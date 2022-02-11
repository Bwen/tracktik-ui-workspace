import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset, Field } from '$form';
import Phone from '$components/ext/Phone.svelte';
import Checkbox from '$components/ext/form/Checkbox.svelte';
import UID from '$components/UID.svelte';
import Link from '$components/ext/Link.svelte';
import Avatar from '$components/Avatar.svelte';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { t } from '$lib/i18n';
import { getRegionOptions } from '$lib/js/utils';
import { ZonesItem } from '@rest/models/ZonesItem';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';
import type {ColumnDefinition} from '$lib/@types/TableData.type';

const $t = get(t);

let initialPageState: PageState = {
    tableData: {perPage: 15, offset: 0}, 
    filters: {
        includeInactive: true, 
        status: ZonesItem.status.ACTIVE,
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
        {css: 'cell-name', text: $t('common.name'),
            component: Link,
            componentProps: [
                {name: 'text', key: 'name'},
                {name: 'href', raw: '/portal/admin/zone/{id}'},
            ]
        },
    ]);

    return columns;
}

function getStatusOptions() {
    let statusOptions = [];
    for (const status in ZonesItem.status) {
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


