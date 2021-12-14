/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourAssignmentsCollection = {
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