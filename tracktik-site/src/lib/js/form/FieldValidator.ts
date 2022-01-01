import { get } from 'svelte/store';
import { t as textStore} from '$lib/i18n';
import type { Field } from "./Field";
let t = get(textStore);

export type FieldValidator = (field: Field) => Promise<string>;

export function isNotBlank(field: Field): Promise<string> {
    return new Promise(resolve => {
        if (!field.value) {
            resolve(t('common.form.errors.invalid-not-blank', {values: {fieldname: field.name}}));
            return;
        }

        resolve('');
    });
}

export function isDomain(field: Field): Promise<string> {
    return new Promise(resolve => {
        if (!field.value.match(/^([a-zA-Z0-9][a-zA-Z0-9-]{1,61}\.|)*[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/)) {
            resolve(t('common.form.errors.invalid-domain'));
            return;
        }

        resolve('');
    });
}
