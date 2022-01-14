import { browser } from '$app/env';
import { FieldType } from '$form';
import type { Fieldset, Field } from '$form';
import Avatar from '$components/Avatar.svelte';
import { t } from '$lib/i18n';
import { getRegionOptions } from '$lib/js/utils';
import { get, writable } from 'svelte/store';
import type { PageState } from '$lib/@types/PageState.type';
const $t = get(t);

let initialPageState: PageState = {
    tableData: {perPage: 15, offset: 0}, 
    filters: {active: true},
};

if (browser) {
    const portalDomain = localStorage.getItem('session:domain');
    const KEY = `${portalDomain}:state:account-assignment.list`;
    const savedState = JSON.parse(localStorage.getItem(KEY));
    if (savedState) {
        initialPageState = savedState;
    }
}

export const pageState = writable(initialPageState);
pageState.subscribe(value => {
    if (browser) {
        const portalDomain = localStorage.getItem('session:domain');
        const KEY = `${portalDomain}:state:account-assignment.list`;
        localStorage.setItem(KEY, JSON.stringify(value));
    }

    return undefined;
});

export function getTableDataColumns(session) {
    let columns = [];
    if (session.auth.scopes.regions.length > 1) {
        columns.push({css: 'cell-region', key: 'account.region.name', text: $t('common.region')});
    }
    
    columns = columns.concat([
        {css: 'cell-avatar',
            component: Avatar, 
            componentProps: [
                {name: 'img', key: 'account.avatar'},
            ]
        },
        {text: $t('common.account'), css: 'cell-account', key: 'account.name'},
        {text: $t('common.startDate'), css: 'cell-start-date', key: 'startedOn'},
        {text: $t('common.endDate'), css: 'cell-end-date', key: 'endedOn'},
    ]);

    return columns;
}

export async function getFiltersFieldset(session): Promise<Fieldset[]> {
    return new Promise(async resolve => {
        const $pageState = get(pageState);

        let valueStatus = '';
        let valueRegion = '';
        let valueKeyword = '';
        if ($pageState && $pageState.filters) {
            valueStatus = $pageState.filters.status ?? '';
            valueRegion = $pageState.filters.region ?? '';
            valueKeyword = $pageState.filters.q ?? '';
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

        fields = fields.concat([
            {
                name: 'active',
                type: FieldType.SELECT,
                placeholder: $t('common.filters.status'),
                value: valueStatus,
                options: [
                    {
                        text: $t('common.active'),
                        value: 'true',
                    },
                    {
                        text: $t('common.inactive'),
                        value: 'false',
                    }
                ],
            },
            {
                name: 'q',
                type: FieldType.TEXT,
                value: valueKeyword,
                placeholder: $t('common.filters.keyword'),
            }
        ]);

        resolve([{fields}]);
    });
}


