/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLinesPut = {
    properties: {
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        unitPrice: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
    isRequired: true,
},
        relationGuid: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        serviceLocation: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        serviceDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        serviceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        taxable: {
    type: 'boolean',
},
        billableItems: {
    type: 'array',
    contains: {
        type: 'BillableItemsId',
    },
},
        invoice: {
    type: 'all-of',
    contains: [{
    type: 'InvoicesId',
}],
},
    },
} as const;