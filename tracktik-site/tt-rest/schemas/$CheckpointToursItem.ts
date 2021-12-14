/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointToursItem = {
    properties: {
        name: {
    type: 'string',
},
        specialInstructions: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        status: {
    type: 'Enum',
},
        active: {
    type: 'boolean',
},
        gracePeriod: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        estimatedDuration: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        checkpoints: {
    type: 'array',
    contains: {
        type: 'CheckpointTourAssignmentsItem',
    },
},
        schedules: {
    type: 'array',
    contains: {
        type: 'CheckpointTourSchedulesItem',
    },
},
        recurrenceType: {
    type: 'Enum',
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