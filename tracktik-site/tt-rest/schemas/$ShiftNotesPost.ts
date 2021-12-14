/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftNotesPost = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
    },
} as const;