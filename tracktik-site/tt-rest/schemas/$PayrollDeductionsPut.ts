/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollDeductionsPut = {
    properties: {
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        payrun: {
    type: 'all-of',
    contains: [{
    type: 'PayrollPayrunsId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        payrollCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
    isRequired: true,
},
        memo: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        eventDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
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
    },
} as const;