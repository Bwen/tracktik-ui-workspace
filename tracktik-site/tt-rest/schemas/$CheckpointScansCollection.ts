/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointScansCollection = {
    properties: {
        checkpoint: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
}],
},
        scannedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        scannedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        scanDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        lng: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
}],
},
        longitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
}],
},
        lat: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
},
        latitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
},
        tourSession: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointTourSessionsId',
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