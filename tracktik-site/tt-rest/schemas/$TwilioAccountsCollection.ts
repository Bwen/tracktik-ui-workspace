/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TwilioAccountsCollection = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        sid: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        token: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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