/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolePermissionsPatch = {
    properties: {
        permission: {
    type: 'string',
},
        role: {
    type: 'all-of',
    contains: [{
    type: 'RolesId',
}],
},
    },
} as const;