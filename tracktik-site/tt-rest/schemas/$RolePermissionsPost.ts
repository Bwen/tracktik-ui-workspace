/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolePermissionsPost = {
    properties: {
        permission: {
    type: 'string',
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