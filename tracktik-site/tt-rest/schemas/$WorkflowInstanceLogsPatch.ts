/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstanceLogsPatch = {
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
    },
} as const;