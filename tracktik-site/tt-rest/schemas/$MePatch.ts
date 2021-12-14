/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MePatch = {
    properties: {
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
    type: 'AddressesPatch',
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
},
        lastName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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