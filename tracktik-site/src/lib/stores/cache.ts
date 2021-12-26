import { browser } from '$app/env';
import { writable } from 'svelte/store';

type RestType = {
    "region-filter"?: number;
};

type DebugType = {
    ssr?: boolean;
};

type PrefType = {
    rest?: RestType;
    debug?: DebugType
};

let initialPref: PrefType;
if (browser && localStorage.getItem('pref') !== null) {
    initialPref = JSON.parse(localStorage.getItem('pref'));
} else {
    initialPref = {rest: {}, debug: {}};
}

export const pref = writable(initialPref);
pref.subscribe(value => browser ? localStorage.setItem('pref', JSON.stringify(value)) : undefined);

export const departments = writable([{}]);
