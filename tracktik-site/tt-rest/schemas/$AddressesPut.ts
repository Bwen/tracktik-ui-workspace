/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddressesPut = {
    properties: {
        addressLine1: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        addressLine2: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        city: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        country: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        state: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        postalCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
    },
} as const;