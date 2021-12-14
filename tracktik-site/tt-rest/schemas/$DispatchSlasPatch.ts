/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchSlasPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        minutes: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;