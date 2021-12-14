/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionsPut = {
    properties: {
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        performedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
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
    },
} as const;