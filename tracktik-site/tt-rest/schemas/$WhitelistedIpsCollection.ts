/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhitelistedIpsCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;