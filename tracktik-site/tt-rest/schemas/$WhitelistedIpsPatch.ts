/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhitelistedIpsPatch = {
    properties: {
        ip: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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
},
    },
} as const;