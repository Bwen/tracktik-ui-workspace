/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsAssign = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
    },
} as const;