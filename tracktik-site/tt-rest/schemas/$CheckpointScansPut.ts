/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointScansPut = {
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
    },
} as const;