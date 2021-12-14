/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostAcknowledgementsPatch = {
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
    },
} as const;