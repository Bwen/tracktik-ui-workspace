/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UsersPost = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        type: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        firstName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        lastName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        primaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        secondaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        username: {
    type: 'string',
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
    },
} as const;