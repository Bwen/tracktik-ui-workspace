/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillingAdhocItemsPut = {
    properties: {
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
    isRequired: true,
},
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        serviceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
    isRequired: true,
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
    isRequired: true,
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
    isRequired: true,
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
    },
} as const;