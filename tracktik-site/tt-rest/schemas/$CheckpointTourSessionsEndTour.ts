/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionsEndTour = {
    properties: {
        completed: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        incompleteReason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        iduser: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
    isRequired: true,
},
    },
} as const;