/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstanceLogsCollection = {
    properties: {
        status: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowStatusesId',
}],
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        workflowInstance: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowInstancesId',
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