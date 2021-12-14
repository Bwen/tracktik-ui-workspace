/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollDeductionsPatch = {
    properties: {
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
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
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        payrollCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
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
},
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
    },
} as const;