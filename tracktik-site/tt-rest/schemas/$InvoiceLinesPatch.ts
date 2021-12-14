/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLinesPatch = {
    properties: {
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        unitPrice: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
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
        timeZone: {
    type: 'string',
},
    },
} as const;