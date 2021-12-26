import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type SelectOptions = {
    value: string | number;
    text: string;
    icon?: IconDefinition;
    indent?: number;
    parentValue?: string;
};
