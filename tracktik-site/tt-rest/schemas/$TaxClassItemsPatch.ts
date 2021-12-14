/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassItemsPatch = {
    properties: {
        percentage: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
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
},
    },
} as const;