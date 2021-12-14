/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddressesPatch = {
    properties: {
        addressLine1: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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
},
        country: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        state: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        postalCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;