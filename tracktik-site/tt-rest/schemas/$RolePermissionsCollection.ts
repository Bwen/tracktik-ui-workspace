/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolePermissionsCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;