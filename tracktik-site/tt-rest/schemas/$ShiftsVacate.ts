/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsVacate = {
    properties: {
        shiftBoard: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
    },
} as const;