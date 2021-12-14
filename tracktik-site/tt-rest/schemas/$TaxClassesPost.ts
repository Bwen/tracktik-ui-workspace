/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassesPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        customId: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        items: {
    type: 'array',
    contains: {
        type: 'TaxClassItemsId',
    },
},
    },
} as const;