/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrdersPatch = {
    properties: {
        subject: {
    type: 'all-of',
    contains: [{
    type: 'PostOrderSubjectsId',
}],
},
        details: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        acknowledgements: {
    type: 'array',
    contains: {
        type: 'PostOrderAcknowledgementsId',
    },
},
    },
} as const;