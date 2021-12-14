/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillingAdhocItemsItem = {
    properties: {
        status: {
    type: 'Enum',
},
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        serviceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
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
        billItem: {
    type: 'one-of',
    contains: [{
    type: 'BillItemsId',
}, {
    type: 'BillItemsItem',
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