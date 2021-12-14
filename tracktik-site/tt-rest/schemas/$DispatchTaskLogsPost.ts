/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTaskLogsPost = {
    properties: {
        status: {
    type: 'Enum',
},
        time: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        dispatchTask: {
    type: 'all-of',
    contains: [{
    type: 'DispatchTasksId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
    },
} as const;