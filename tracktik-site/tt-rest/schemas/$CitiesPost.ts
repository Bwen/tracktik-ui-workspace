/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CitiesPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
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
    isRequired: true,
},
    },
} as const;