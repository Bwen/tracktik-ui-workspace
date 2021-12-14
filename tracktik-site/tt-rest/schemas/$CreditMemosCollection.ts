/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreditMemosCollection = {
    properties: {
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        status: {
    type: 'Enum',
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
},
        date: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        dueDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
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
        subTotal: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        taxTotal: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        total: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        distributed: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        aging: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        approvedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        approvedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        invoiceBatchId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;