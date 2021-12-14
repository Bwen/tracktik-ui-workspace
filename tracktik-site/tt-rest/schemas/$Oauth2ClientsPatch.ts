/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2ClientsPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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
},
        redirectUris: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
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