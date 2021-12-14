/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DepartmentsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
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
        installCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;