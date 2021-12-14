/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ZonesPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPost',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        allowedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesId',
    },
},
        restrictedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesId',
    },
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        preferredLanguage: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;