/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeRolesPut = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        role: {
    type: 'all-of',
    contains: [{
    type: 'RolesId',
}],
    isRequired: true,
},
    },
} as const;