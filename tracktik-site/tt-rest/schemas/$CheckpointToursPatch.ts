/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointToursPatch = {
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
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
        recurrenceType: {
    type: 'Enum',
},
    },
} as const;