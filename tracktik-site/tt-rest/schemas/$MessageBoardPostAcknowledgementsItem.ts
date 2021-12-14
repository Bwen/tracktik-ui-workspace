/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostAcknowledgementsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        message: {
    type: 'one-of',
    contains: [{
    type: 'MessageBoardPostsId',
}, {
    type: 'MessageBoardPostsItem',
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