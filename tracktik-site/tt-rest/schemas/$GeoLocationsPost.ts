/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoLocationsPost = {
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
        belongsTo: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
    },
} as const;