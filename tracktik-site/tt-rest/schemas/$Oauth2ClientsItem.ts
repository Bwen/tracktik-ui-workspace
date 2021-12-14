/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Oauth2ClientsItem = {
    properties: {
        identifier: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        secret: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
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
        logo: {
    type: 'all-of',
    contains: [{
    type: 'Image',
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;