/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchCustomLocationsCollection = {
    properties: {
        dispatchTask: {
    type: 'all-of',
    contains: [{
    type: 'DispatchTasksId',
}],
},
        type: {
    type: 'Enum',
},
        name: {
    type: 'string',
},
        addressLine1: {
    type: 'string',
},
        addressLine2: {
    type: 'string',
},
        city: {
    type: 'string',
},
        state: {
    type: 'string',
},
        postalCode: {
    type: 'string',
},
        country: {
    type: 'string',
},
        autoGeoCode: {
    type: 'boolean',
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
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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