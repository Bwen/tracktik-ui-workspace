/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassItemsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'TaxClassesId',
}, {
    type: 'TaxClassesItem',
}],
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;