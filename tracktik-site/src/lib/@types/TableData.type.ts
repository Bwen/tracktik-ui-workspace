
export type CompProp = {
    name: string;
    key: string;
    raw: any;
} | {name: string; key: string} | {name: string; raw: any};

export type ColumnDefinition = {
    key?: string;
    component?: any;
    componentProps?: CompProp[];
    text?: string;
    css?: string;
    parse?: (value: string) => string;
};
