/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLinesItem = {
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
        lineSubTotal: {
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
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
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
    type: 'one-of',
    contains: [{
    type: 'TaxClassesId',
}, {
    type: 'TaxClassesItem',
}],
},
        taxable: {
    type: 'boolean',
},
        taxTotal: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        billableItems: {
    type: 'array',
    contains: {
        type: 'BillableItemsItem',
    },
},
        invoice: {
    type: 'one-of',
    contains: [{
    type: 'InvoicesId',
}, {
    type: 'InvoicesItem',
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
        timeZone: {
    type: 'string',
},
    },
} as const;