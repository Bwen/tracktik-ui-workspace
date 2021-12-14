/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhitelistedIpsPut = {
    properties: {
        ip: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        label: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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