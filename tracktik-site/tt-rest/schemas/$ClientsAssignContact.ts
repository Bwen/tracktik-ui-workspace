/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsAssignContact = {
    properties: {
        contact: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        useAsBillingAddress: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
    },
} as const;