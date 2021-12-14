/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserRolesCollection = {
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