/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollPayrunItemsPut = {
    properties: {
        payrun: {
    type: 'all-of',
    contains: [{
    type: 'PayrollPayrunsId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        department: {
    type: 'all-of',
    contains: [{
    type: 'DepartmentsId',
}],
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        payrollCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        customPayCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        payrollCodeLabel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
        total: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        originType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        originTypeItemId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        notes: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        locked: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        shiftFragmentDateStart: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        shiftFragmentDateEnd: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        expenseDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        employeeType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        companyCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        baseRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        payRateLevel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        qualifier: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        labeledCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;