/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventsSubscriptionsPost = {
    properties: {
        customId: {
    type: 'string',
    isRequired: true,
},
        name: {
    type: 'string',
    isRequired: true,
},
        events: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        entityResponse: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        contextFilters: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        userDefinedFilters: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        url: {
    type: 'string',
    isRequired: true,
},
        secretHeaderName: {
    type: 'string',
    isRequired: true,
},
        secret: {
    type: 'string',
    isRequired: true,
},
        failureEmail: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
    },
} as const;