/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftNotesPatch = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
    },
} as const;