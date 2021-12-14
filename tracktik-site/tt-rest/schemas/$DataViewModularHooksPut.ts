/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewModularHooksPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        dataView: {
    type: 'all-of',
    contains: [{
    type: 'DataViewsId',
}],
    isRequired: true,
},
        dataViewCategory: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
    isRequired: true,
},
        portal: {
    type: 'Enum',
    isRequired: true,
},
        contextFilter: {
    type: 'Enum',
    isRequired: true,
},
        contextFilterAttribute: {
    type: 'string',
},
        settings: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;