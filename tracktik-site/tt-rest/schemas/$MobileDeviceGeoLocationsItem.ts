/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileDeviceGeoLocationsItem = {
    properties: {
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        mobileDevice: {
    type: 'one-of',
    contains: [{
    type: 'MobileDevicesId',
}, {
    type: 'MobileDevicesItem',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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