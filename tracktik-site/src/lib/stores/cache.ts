import { browser } from '$app/env';
import { asyncable } from 'svelte-asyncable';
import { writable, readable } from 'svelte/store';
import type {DepartmentsItem} from '@rest/models/DepartmentsItem';
import type {ZonesItem} from '@rest/models/ZonesItem';
import {METHODS, request} from '$lib/js/restClient';

type DebugType = {
    ssr?: boolean;
};

type PrefType = {
    debug?: DebugType
};

let initialPref: PrefType;
if (browser && localStorage.getItem('pref') !== null) {
    initialPref = JSON.parse(localStorage.getItem('pref'));
} else {
    initialPref = {debug: {}};
}

export const pref = writable(initialPref);
pref.subscribe(value => browser ? localStorage.setItem('pref', JSON.stringify(value)) : undefined);

function getExpiry() {
    let now = new Date();
    now.setDate(now.getDate() + 7); // 7 days in the future
    return now.getTime();
}

function getCacheKey(key: string): string {
    const portalDomain = localStorage.getItem('session:domain');
    const KEY = `${portalDomain}:cache:${key}`;
    return KEY;
}

function getCache(key: string) {
    const cache = localStorage.getItem(getCacheKey(key));
    if (cache) {
        const {expiry, data} = JSON.parse(cache);
        if (expiry < Date.now()) {
            return undefined;
        }

        return data;
    }

    return undefined;
}

function saveCache(key: string, value) {
    const cache = {expiry: getExpiry(), data: value};
    localStorage.setItem(getCacheKey(key), JSON.stringify(cache));
}

export const departments = asyncable(async () => {
    if (!browser) return;

    const KEY = 'departments';
    const cache = getCache(KEY);
    if (cache) {
        return cache;
    }

    const res = await request('/departments', METHODS.GET, {include: 'region'});
    if (res.ok) {
        const result = await res.json();
        saveCache(KEY, result.data);

        return result.data;
    }

    return [];
}, null);

export const zones = asyncable(async () => {
    if (!browser) return;

    const KEY = 'zones';
    const cache = getCache(KEY);
    if (cache) {
        return cache;
    }

    const res = await request('/zones', METHODS.GET, {include: 'region'});
    if (res.ok) {
        const result = await res.json();
        saveCache(KEY, result.data);

        return result.data;
    }

    return [];
}, null);
