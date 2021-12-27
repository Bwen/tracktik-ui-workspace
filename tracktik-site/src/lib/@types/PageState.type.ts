
export type TableDataState = {
    perPage?: number;
    offset?: number;
};

export type PageState = {
    filters?: any;
    tableData?: TableDataState;
};
