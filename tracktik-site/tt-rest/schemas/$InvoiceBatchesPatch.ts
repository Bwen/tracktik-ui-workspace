/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceBatchesPatch = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        startDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        endDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        adhocsIncluded: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        invoices: {
    type: 'array',
    contains: {
        type: 'InvoicesId',
    },
},
        adhocInvoices: {
    type: 'array',
    contains: {
        type: 'InvoicesId',
    },
},
    },
} as const;