/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointScansItem = {
    properties: {
        checkpoint: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointsId',
}, {
    type: 'CheckpointsItem',
}],
},
        scannedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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
    type: 'one-of',
    contains: [{
    type: 'CheckpointTourSessionsId',
}, {
    type: 'CheckpointTourSessionsItem',
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