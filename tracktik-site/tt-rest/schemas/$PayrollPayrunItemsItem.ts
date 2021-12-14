/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollPayrunItemsItem = {
    properties: {
        payrun: {
    type: 'one-of',
    contains: [{
    type: 'PayrollPayrunsId',
}, {
    type: 'PayrollPayrunsItem',
}],
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        department: {
    type: 'one-of',
    contains: [{
    type: 'DepartmentsId',
}, {
    type: 'DepartmentsItem',
}],
},
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        payrollCode: {
    type: 'one-of',
    contains: [{
    type: 'PayrollCodesId',
}, {
    type: 'PayrollCodesItem',
}],
},
        customPayCode: {
    type: 'one-of',
    contains: [{
    type: 'PayrollCodesId',
}, {
    type: 'PayrollCodesItem',
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
    },
} as const;