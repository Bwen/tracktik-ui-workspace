/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowsItem = {
    properties: {
        name: {
    type: 'string',
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        isGlobal: {
    type: 'boolean',
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        status: {
    type: 'Enum',
},
        statuses: {
    type: 'array',
    contains: {
        type: 'WorkflowStatusesItem',
    },
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
        createdBy: {
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
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;