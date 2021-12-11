import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type SelectOptions = {
    text: string;
    value: string;
    icon?: IconDefinition;
}

export enum FormFieldType {
    TEXT = 'Input',
    PASSWORD = 'Password',
    SELECT = 'Select',
};

export type FormField = {
    id?: string;
    name: string;
    label?: string;
    type: FormFieldType;
    value?: string;
    error?: string;
    placeholder?: string;
    icon?: IconDefinition;
    css?: string;
    data?: object;
    options?: SelectOptions[];
};

export type Fieldset = {
    name?: string;
    legend?: string;
    fields: FormField[];
};
