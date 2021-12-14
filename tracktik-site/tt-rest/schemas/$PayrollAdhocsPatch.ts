/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollAdhocsPatch = {
    properties: {
        isOvertimeWeighted: {
    type: 'boolean',
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
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
    },
} as const;