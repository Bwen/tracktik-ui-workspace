/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VendorsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        mainEmail: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
    isRequired: true,
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
    isRequired: true,
},
        lastName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
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