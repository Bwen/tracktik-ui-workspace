/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInTicketsPut = {
    properties: {
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
    isRequired: true,
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