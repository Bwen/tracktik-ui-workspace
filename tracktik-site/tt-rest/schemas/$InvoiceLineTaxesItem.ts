/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLineTaxesItem = {
    properties: {
        amount: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        taxClassItem: {
    type: 'one-of',
    contains: [{
    type: 'TaxClassItemsId',
}, {
    type: 'TaxClassItemsItem',
}],
},
        invoiceLine: {
    type: 'array',
    contains: {
        type: 'InvoiceLinesItem',
    },
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