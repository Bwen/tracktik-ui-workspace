/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourAssignmentsPatch = {
    properties: {
        checkpoint: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
}],
},
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
},
        sortOrder: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
},
    },
} as const;