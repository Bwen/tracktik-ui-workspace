/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoLocationsPatch = {
    properties: {
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
    },
} as const;