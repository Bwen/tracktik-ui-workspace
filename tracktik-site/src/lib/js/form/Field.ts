import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import type { FieldValidator } from "./FieldValidator";

export type SelectOptions = {
    text: string;
    value: string;
    icon?: IconDefinition;
}

export enum FieldType {
    SWITCH = 'Switch',
    CHECKBOX = 'Checkbox',
    BUTTON = 'Button',
    TEXT = 'Input',
    PASSWORD = 'Password',
    SELECT = 'Select',
    AUTOCOMPLETE = 'Autocomplete',
    CALENDAR = 'Date',
};


export type Field = {
    id?: string;
    name: string;
    label?: string;
    tooltip?: string;
    type: FieldType;
    value?: string | number | boolean;
    initial_value?: string | number | boolean;
    error?: string;
    placeholder?: string;
    icon?: IconDefinition;
    css?: string;
    data?: object;
    options?: SelectOptions[];
    validators?: FieldValidator[];
    includeChildsInSearch?: boolean;
    allowReset?: boolean;
    isLoading?: boolean;
    isPicker?: boolean;
    checked?: boolean;
    autocomplete?: string;
};
