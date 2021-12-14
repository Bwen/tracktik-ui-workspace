/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2RefreshTokensPatch = {
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
        accessToken: {
    type: 'all-of',
    contains: [{
    type: 'Oauth2RefreshTokensId',
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