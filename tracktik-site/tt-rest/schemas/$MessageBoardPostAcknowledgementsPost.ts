/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostAcknowledgementsPost = {
    properties: {
        status: {
    type: 'Enum',
    isRequired: true,
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
    isRequired: true,
},
        message: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostsId',
}],
    isRequired: true,
},
    },
} as const;