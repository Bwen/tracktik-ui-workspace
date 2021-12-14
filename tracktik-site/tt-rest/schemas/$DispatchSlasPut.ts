/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchSlasPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        minutes: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
    },
} as const;