/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderSubjectsPost = {
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