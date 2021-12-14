/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegionsPatch = {
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
    type: 'AddressesPatch',
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