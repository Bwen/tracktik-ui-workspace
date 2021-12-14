/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2ClientsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        active: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        redirectUris: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        grants: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        scopes: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        postLogoutRedirectUris: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;