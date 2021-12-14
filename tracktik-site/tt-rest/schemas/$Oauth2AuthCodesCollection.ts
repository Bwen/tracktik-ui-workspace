/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AuthCodesCollection = {
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