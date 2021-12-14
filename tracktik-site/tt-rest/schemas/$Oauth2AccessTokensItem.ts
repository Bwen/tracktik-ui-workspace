/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AccessTokensItem = {
    properties: {
        identifier: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        expiresOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        client: {
    type: 'one-of',
    contains: [{
    type: 'Oauth2ClientsId',
}, {
    type: 'Oauth2ClientsItem',
}],
},
        user: {
    type: 'one-of',
    contains: [{
    type: 'UsersId',
}, {
    type: 'UsersItem',
}],
},
        scopes: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        isRevoked: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
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