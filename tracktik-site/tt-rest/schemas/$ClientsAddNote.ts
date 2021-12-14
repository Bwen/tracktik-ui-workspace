/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsAddNote = {
    properties: {
        note: {
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
    },
} as const;