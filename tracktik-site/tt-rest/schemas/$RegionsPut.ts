/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegionsPut = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        company: {
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
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPut',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        prefix: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;