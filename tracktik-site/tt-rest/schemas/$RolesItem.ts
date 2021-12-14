/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolesItem = {
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
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        permissions: {
    type: 'array',
    contains: {
        type: 'RolePermissionsItem',
    },
},
        isGlobal: {
    type: 'boolean',
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