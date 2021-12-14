/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddressesItem = {
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
        latitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
},
        longitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
}],
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;