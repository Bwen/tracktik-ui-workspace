/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollAdhocsCollection = {
    properties: {
        isOvertimeWeighted: {
    type: 'boolean',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;