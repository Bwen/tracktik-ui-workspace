/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchCustomLocationsPost = {
    properties: {
        dispatchTask: {
    type: 'all-of',
    contains: [{
    type: 'DispatchTasksId',
}],
    isRequired: true,
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        name: {
    type: 'string',
},
        addressLine1: {
    type: 'string',
    isRequired: true,
},
        addressLine2: {
    type: 'string',
},
        city: {
    type: 'string',
    isRequired: true,
},
        state: {
    type: 'string',
},
        postalCode: {
    type: 'string',
    isRequired: true,
},
        country: {
    type: 'string',
},
        autoGeoCode: {
    type: 'boolean',
    isRequired: true,
},
        latitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
    isRequired: true,
},
        longitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
}],
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
    },
} as const;