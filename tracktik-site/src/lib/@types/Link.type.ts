
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type Link = {
    icon?: IconDefinition;
    icon_hover?: IconDefinition;
    unicode?: string,
    subtext?: string;
    text?: string;
    href?: string;
    id?: string;
    title?: string;
    css?: string;
    data?: { [key: string]: string };
};

