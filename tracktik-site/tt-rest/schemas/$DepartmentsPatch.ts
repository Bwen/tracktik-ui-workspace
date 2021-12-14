/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DepartmentsPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        details: {
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
        installCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;