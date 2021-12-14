/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsPost = {
    properties: {
        company: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        parentClient: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
    isRequired: true,
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
        type: {
    type: 'Enum',
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPost',
}],
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        faxNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        website: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        salesRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesPost',
}],
},
        accountRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesPost',
}],
},
        allowedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesId',
    },
},
        restrictedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesId',
    },
},
    },
} as const;