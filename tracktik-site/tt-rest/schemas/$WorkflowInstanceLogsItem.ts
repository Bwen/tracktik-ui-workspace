/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstanceLogsItem = {
    properties: {
        status: {
    type: 'one-of',
    contains: [{
    type: 'WorkflowStatusesId',
}, {
    type: 'WorkflowStatusesItem',
}],
},
        user: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        workflowInstance: {
    type: 'one-of',
    contains: [{
    type: 'WorkflowInstancesId',
}, {
    type: 'WorkflowInstancesItem',
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