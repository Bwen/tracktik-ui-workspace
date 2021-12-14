/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserLoginLogsPost = {
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
    },
} as const;