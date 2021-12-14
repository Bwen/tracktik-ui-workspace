/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstancesPost = {
    properties: {
        currentStatus: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowStatusesId',
}],
},
        workflow: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowsId',
}],
},
        modifiedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        logs: {
    type: 'array',
    contains: {
        type: 'WorkflowInstanceLogsId',
    },
},
        dispatchTask: {
    type: 'all-of',
    contains: [{
    type: 'DispatchTasksId',
}],
},
    },
} as const;