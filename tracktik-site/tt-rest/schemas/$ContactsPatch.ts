/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContactsPatch = {
    properties: {
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
        jobTitle: {
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
        fax: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPatch',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
    },
} as const;