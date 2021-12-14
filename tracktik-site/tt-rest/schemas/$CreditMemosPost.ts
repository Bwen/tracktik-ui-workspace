/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreditMemosPost = {
    properties: {
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        documentNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        invoiceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        date: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        dueDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        servicePeriodStartDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        servicePeriodStart: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        servicePeriodEndDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        servicePeriodEnd: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
},
        lines: {
    type: 'array',
    contains: {
        type: 'InvoiceLinesId',
    },
},
    },
} as const;