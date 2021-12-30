import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import type { v4 as uuidv4 } from 'uuid';
import { get, writable } from 'svelte/store';

export enum SnackType {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Success = 'success',
    None = 'none',
};

export type SnackbarItem = {
    text: string;
    id?: uuidv4;
    duration?: number;
    icon?: IconDefinition;
    type?: SnackType;
};

let initialItems: SnackbarItem[] = [];
export let items = writable(initialItems);

export function addSnack(item: SnackbarItem) {
    let snackItems = get(items);
    snackItems.push(item);
    items.set(snackItems);
}