/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserLoginLogsCollection = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'UsersId',
}],
},
        loggedInOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        ip: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        userAgent: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        method: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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