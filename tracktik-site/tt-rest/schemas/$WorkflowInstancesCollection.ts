/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowInstancesCollection = {
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
        dispatchTask: {
    type: 'all-of',
    contains: [{
    type: 'DispatchTasksId',
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