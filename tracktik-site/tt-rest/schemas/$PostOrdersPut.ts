/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrdersPut = {
    properties: {
        subject: {
    type: 'all-of',
    contains: [{
    type: 'PostOrderSubjectsId',
}],
    isRequired: true,
},
        details: {
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
        acknowledgements: {
    type: 'array',
    contains: {
        type: 'PostOrderAcknowledgementsId',
    },
},
    },
} as const;