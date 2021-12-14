/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        portal: {
    type: 'Enum',
},
        order: {
    type: 'all-of',
    contains: [{
    type: 'SortIndex',
}],
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