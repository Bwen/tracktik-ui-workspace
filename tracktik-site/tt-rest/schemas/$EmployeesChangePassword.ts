/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeesChangePassword = {
    properties: {
        newPassword: {
    type: 'all-of',
    contains: [{
    type: 'Password',
}],
    isRequired: true,
},
        oldPassword: {
    type: 'all-of',
    contains: [{
    type: 'Password',
}],
    isRequired: true,
},
        secret: {
    type: 'all-of',
    contains: [{
    type: 'Password',
}],
    isRequired: true,
},
    },
} as const;