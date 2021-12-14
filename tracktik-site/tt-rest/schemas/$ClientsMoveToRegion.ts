/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsMoveToRegion = {
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