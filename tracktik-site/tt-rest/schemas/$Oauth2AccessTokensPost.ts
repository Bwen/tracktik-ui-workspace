/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AccessTokensPost = {
    properties: {
        identifier: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        expiresOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'Oauth2ClientsId',
}],
    isRequired: true,
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'UsersId',
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
    },
} as const;