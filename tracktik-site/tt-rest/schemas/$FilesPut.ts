/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FilesPut = {
    properties: {
        url: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        format: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;