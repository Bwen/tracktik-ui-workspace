/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetsChangeZone = {
    properties: {
        zone: {
    type: 'all-of',
    contains: [{
    type: 'ZonesId',
}],
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
    },
} as const;