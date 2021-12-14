/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AuthCodesPost = {
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
        isRevoked: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        scopes: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'UsersId',
}],
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'Oauth2ClientsId',
}],
    isRequired: true,
},
    },
} as const;