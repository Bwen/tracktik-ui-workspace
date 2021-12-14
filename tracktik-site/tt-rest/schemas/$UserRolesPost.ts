/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserRolesPost = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'UsersId',
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