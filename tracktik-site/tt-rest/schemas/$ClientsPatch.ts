/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsPatch = {
    properties: {
        company: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPatch',
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
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        salesRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesPatch',
}],
},
        accountRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesPatch',
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