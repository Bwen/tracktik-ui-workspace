/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassesPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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