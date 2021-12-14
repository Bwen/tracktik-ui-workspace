/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostAcknowledgementsCollection = {
    properties: {
        status: {
    type: 'Enum',
},
        acknowledgedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        acknowledgeAt: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        message: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostsId',
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