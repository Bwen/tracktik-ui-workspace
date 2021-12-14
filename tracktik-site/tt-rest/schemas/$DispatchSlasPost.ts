/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchSlasPost = {
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