/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillingAdhocItemsPatch = {
    properties: {
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
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
    },
} as const;