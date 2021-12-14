/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderSubjectsPatch = {
    properties: {
        name: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
    },
} as const;