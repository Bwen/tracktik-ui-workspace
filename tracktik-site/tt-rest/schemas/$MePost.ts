/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MePost = {
    properties: {
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        password: {
    type: 'all-of',
    contains: [{
    type: 'Password',
}],
},
        gender: {
    type: 'Enum',
},
        birthday: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPost',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        language: {
    type: 'Enum',
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