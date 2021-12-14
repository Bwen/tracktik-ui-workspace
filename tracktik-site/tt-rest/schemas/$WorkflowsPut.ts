/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowsPut = {
    properties: {
        name: {
    type: 'string',
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        isGlobal: {
    type: 'boolean',
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        statuses: {
    type: 'array',
    contains: {
        type: 'WorkflowStatusesId',
    },
},
    },
} as const;