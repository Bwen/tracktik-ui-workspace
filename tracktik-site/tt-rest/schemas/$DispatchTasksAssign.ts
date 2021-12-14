/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTasksAssign = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        notify: {
    type: 'boolean',
    isRequired: true,
},
    },
} as const;