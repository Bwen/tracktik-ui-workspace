/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAccountBansPost = {
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
        reason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        startDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
    },
} as const;