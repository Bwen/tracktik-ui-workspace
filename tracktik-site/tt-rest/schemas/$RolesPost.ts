/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolesPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        portal: {
    type: 'Enum',
    isRequired: true,
},
        order: {
    type: 'all-of',
    contains: [{
    type: 'SortIndex',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        permissions: {
    type: 'array',
    contains: {
        type: 'RolePermissionsId',
    },
},
        isGlobal: {
    type: 'boolean',
},
    },
} as const;