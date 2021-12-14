/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAccountAssignmentsPut = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        active: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        payRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;