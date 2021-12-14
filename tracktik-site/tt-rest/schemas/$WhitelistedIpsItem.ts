/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhitelistedIpsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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