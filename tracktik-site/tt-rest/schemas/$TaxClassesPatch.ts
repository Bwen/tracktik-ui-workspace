/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassesPatch = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'string',
},
        items: {
    type: 'array',
    contains: {
        type: 'TaxClassItemsId',
    },
},
    },
} as const;