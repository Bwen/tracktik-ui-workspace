/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewModularHooksPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        dataView: {
    type: 'all-of',
    contains: [{
    type: 'DataViewsId',
}],
},
        dataViewCategory: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
},
        portal: {
    type: 'Enum',
},
        contextFilter: {
    type: 'Enum',
},
        contextFilterAttribute: {
    type: 'string',
},
        settings: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        status: {
    type: 'Enum',
},
    },
} as const;