/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserRolesPatch = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'UsersId',
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