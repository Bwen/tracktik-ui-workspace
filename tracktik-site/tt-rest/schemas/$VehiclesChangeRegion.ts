/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VehiclesChangeRegion = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
    },
} as const;