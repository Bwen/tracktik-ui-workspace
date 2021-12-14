/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeRolesPatch = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        role: {
    type: 'all-of',
    contains: [{
    type: 'RolesId',
}],
},
    },
} as const;