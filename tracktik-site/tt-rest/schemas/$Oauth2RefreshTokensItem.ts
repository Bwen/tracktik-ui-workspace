/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2RefreshTokensItem = {
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
    type: 'one-of',
    contains: [{
    type: 'Oauth2RefreshTokensId',
}, {
    type: 'Oauth2RefreshTokensItem',
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