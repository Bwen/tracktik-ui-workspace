import { writable } from 'svelte/store';
import { browser } from '$app/env';

import type { JsonValue } from '$lib/@types/json.type';

export const localStore = (key: string, initial: JsonValue) => {
	if (!browser) {
		return {
			subscribe: () => {},
			set: () => {},
			update: () => {},
		}
	}

	const toString = (value: JsonValue) => JSON.stringify(value, null, 2);
	const toObj = JSON.parse;

	if (localStorage.getItem(key) === null) {
		localStorage.setItem(key, toString(initial));
	}

	const saved = toObj(localStorage.getItem(key));

	const { subscribe, set, update } = writable(saved);

	return {
		subscribe,
		set: (value: JsonValue) => {
			localStorage.setItem(key, toString(value));
			return set(value);
		},
		update
	};
};
