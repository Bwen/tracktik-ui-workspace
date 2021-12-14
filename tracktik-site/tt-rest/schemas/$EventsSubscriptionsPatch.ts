/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventsSubscriptionsPatch = {
    properties: {
        customId: {
    type: 'string',
},
        name: {
    type: 'string',
},
        events: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
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
},
        secretHeaderName: {
    type: 'string',
},
        secret: {
    type: 'string',
},
        failureEmail: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
    },
} as const;