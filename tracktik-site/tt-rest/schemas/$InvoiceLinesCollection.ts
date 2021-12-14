/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InvoiceLinesCollection = {
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
        taxTotal: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        invoice: {
    type: 'all-of',
    contains: [{
    type: 'InvoicesId',
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