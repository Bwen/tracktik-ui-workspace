/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLineTaxesCollection = {
    properties: {
        amount: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        taxClassItem: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassItemsId',
}],
},
        invoiceLine: {
    type: 'array',
    contains: {
        type: 'InvoiceLinesId',
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