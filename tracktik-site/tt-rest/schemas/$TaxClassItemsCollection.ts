/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassItemsCollection = {
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