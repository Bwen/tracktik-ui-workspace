/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NotesPut = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
    },
} as const;