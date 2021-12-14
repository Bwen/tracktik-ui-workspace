/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourAssignmentsPost = {
    properties: {
        checkpoint: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
}],
    isRequired: true,
},
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
    isRequired: true,
},
        sortOrder: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
},
    },
} as const;