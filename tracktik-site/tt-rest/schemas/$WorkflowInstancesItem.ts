/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstancesItem = {
    properties: {
        currentStatus: {
    type: 'one-of',
    contains: [{
    type: 'WorkflowStatusesId',
}, {
    type: 'WorkflowStatusesItem',
}],
},
        workflow: {
    type: 'one-of',
    contains: [{
    type: 'WorkflowsId',
}, {
    type: 'WorkflowsItem',
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
        type: 'WorkflowInstanceLogsItem',
    },
},
        dispatchTask: {
    type: 'one-of',
    contains: [{
    type: 'DispatchTasksId',
}, {
    type: 'DispatchTasksItem',
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