/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NotesPost = {
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