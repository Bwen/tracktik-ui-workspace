/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NotesPatch = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;