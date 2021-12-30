import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import type { FieldValidator } from "./FieldValidator";

export type SelectOptions = {
    text: string;
    value: string;
    icon?: IconDefinition;
}

export enum FieldType {
    SWITCH = 'Switch',
    BUTTON = 'Button',
    TEXT = 'Input',
    PASSWORD = 'Password',
    SELECT = 'Select',
    AUTOCOMPLETE = 'Autocomplete',
};


export type Field = {
    id?: string;
    name: string;
    label?: string;
    tooltip?: string;
    type: FieldType;
    value?: string | number | boolean;
    error?: string;
    placeholder?: string;
    icon?: IconDefinition;
    css?: string;
    data?: object;
    options?: SelectOptions[];
    validators?: FieldValidator[];
    includeChildsInSearch?: boolean;
    allowReset?: boolean;
};
