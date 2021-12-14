/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderSubjectsPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
    },
} as const;