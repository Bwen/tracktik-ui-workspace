/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceBatchesPut = {
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
    isRequired: true,
},
        adhocsIncluded: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
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