/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionsItem = {
    properties: {
        tour: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointToursId',
}, {
    type: 'CheckpointToursItem',
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
        performedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        status: {
    type: 'Enum',
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        durationMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        checkpointsTotal: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        checkpoints: {
    type: 'array',
    contains: {
        type: 'CheckpointsItem',
    },
},
        checkpointsScannedTotal: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        checkpointsScans: {
    type: 'array',
    contains: {
        type: 'CheckpointScansItem',
    },
},
        checkpointsMissedTotal: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        checkpointsMissed: {
    type: 'array',
    contains: {
        type: 'CheckpointsItem',
    },
},
        batchId: {
    type: 'string',
},
        comments: {
    type: 'array',
    contains: {
        type: 'CheckpointTourSessionCommentsItem',
    },
},
        incompleteReason: {
    type: 'string',
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