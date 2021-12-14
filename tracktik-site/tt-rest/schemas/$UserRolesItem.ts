/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserRolesItem = {
    properties: {
        user: {
    type: 'one-of',
    contains: [{
    type: 'UsersId',
}, {
    type: 'UsersItem',
}],
},
        role: {
    type: 'one-of',
    contains: [{
    type: 'RolesId',
}, {
    type: 'RolesItem',
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