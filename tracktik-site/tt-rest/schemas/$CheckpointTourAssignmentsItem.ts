/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourAssignmentsItem = {
    properties: {
        checkpoint: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointsId',
}, {
    type: 'CheckpointsItem',
}],
},
        tour: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointToursId',
}, {
    type: 'CheckpointToursItem',
}],
},
        sortOrder: {
    type: 'all-of',
    contains: [{
    type: 'Number',
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