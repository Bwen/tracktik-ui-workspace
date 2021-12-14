import type { Field } from './Field';

export type Fieldset = {
    name?: string;
    legend?: string;
    fields: Field[];
};
