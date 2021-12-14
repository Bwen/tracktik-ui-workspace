/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2AuthCodesItem = {
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
    type: 'one-of',
    contains: [{
    type: 'UsersId',
}, {
    type: 'UsersItem',
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