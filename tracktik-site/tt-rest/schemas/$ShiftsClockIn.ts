/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsClockIn = {
    properties: {
        startMethod: {
    type: 'Enum',
    isRequired: true,
},
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
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
        gpsAccuracy: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
    },
} as const;