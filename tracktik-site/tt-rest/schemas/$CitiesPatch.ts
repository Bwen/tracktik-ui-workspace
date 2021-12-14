/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CitiesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        province: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        state: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        country: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;