/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserLoginLogsItem = {
    properties: {
        user: {
    type: 'one-of',
    contains: [{
    type: 'UsersId',
}, {
    type: 'UsersItem',
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