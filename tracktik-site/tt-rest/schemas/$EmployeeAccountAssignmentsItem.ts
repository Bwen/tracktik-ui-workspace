/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAccountAssignmentsItem = {
    properties: {
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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