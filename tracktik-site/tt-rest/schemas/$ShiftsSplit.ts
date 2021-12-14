/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsSplit = {
    properties: {
        splitTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        firstPeriodUser: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        firstPeriodBreakMinutes: {
    type: 'number',
},
        lastPeriodUser: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        lastPeriodBreakMinutes: {
    type: 'number',
},
    },
} as const;