/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VendorsPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        mainEmail: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        cities: {
    type: 'array',
    contains: {
        type: 'CitiesId',
    },
},
        serviceTypes: {
    type: 'array',
    contains: {
        type: 'TaskTypesId',
    },
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
    },
} as const;