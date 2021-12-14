/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointToursPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        active: {
    type: 'boolean',
},
        gracePeriod: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
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