/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowsPatch = {
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
},
        isGlobal: {
    type: 'boolean',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        status: {
    type: 'Enum',
},
        statuses: {
    type: 'array',
    contains: {
        type: 'WorkflowStatusesId',
    },
},
    },
} as const;