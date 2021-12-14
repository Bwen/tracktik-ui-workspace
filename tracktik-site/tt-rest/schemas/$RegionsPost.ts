/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegionsPost = {
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
    type: 'AddressesPost',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        parentRegion: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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