/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountsPatch = {
    properties: {
        name: {
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
        type: {
    type: 'Enum',
},
        subType: {
    type: 'Enum',
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPatch',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
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
        dispatchSla: {
    type: 'all-of',
    contains: [{
    type: 'DispatchSlasId',
}],
},
    },
} as const;