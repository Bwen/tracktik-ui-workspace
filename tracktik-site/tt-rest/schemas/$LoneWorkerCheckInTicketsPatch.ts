/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInTicketsPatch = {
    properties: {
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        status: {
    type: 'Enum',
},
        comments: {
    type: 'array',
    contains: {
        type: 'CommentsId',
    },
},
    },
} as const;