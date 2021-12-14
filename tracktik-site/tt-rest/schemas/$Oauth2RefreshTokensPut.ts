/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2RefreshTokensPut = {
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
        accessToken: {
    type: 'all-of',
    contains: [{
    type: 'Oauth2RefreshTokensId',
}],
    isRequired: true,
},
        isRevoked: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;