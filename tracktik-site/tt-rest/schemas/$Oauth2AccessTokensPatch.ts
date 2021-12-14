/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AccessTokensPatch = {
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
    type: 'all-of',
    contains: [{
    type: 'Oauth2ClientsId',
}],
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