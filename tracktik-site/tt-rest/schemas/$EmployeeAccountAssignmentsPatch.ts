/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAccountAssignmentsPatch = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        active: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
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