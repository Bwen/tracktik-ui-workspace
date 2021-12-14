/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassItemsPost = {
    properties: {
        percentage: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        code: {
    type: 'string',
},
        number: {
    type: 'string',
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
    isRequired: true,
},
    },
} as const;