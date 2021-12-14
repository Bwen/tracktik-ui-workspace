/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLineTaxesPatch = {
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
    },
} as const;