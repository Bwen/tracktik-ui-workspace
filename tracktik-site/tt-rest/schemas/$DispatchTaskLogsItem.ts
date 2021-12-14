/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTaskLogsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'DispatchTasksId',
}, {
    type: 'DispatchTasksItem',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;