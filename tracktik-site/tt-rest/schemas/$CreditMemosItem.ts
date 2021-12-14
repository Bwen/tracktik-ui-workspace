/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreditMemosItem = {
    properties: {
        client: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
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
    type: 'one-of',
    contains: [{
    type: 'TaxClassesId',
}, {
    type: 'TaxClassesItem',
}],
},
        contract: {
    type: 'one-of',
    contains: [{
    type: 'ContractsId',
}, {
    type: 'ContractsItem',
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
        lines: {
    type: 'array',
    contains: {
        type: 'InvoiceLinesItem',
    },
},
        aging: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        approvedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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