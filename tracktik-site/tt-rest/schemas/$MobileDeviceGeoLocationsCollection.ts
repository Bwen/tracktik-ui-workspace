/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileDeviceGeoLocationsCollection = {
    properties: {
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        mobileDevice: {
    type: 'all-of',
    contains: [{
    type: 'MobileDevicesId',
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
        accuracy: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        belongsTo: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
    },
} as const;