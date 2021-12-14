/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowsPost = {
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
        statuses: {
    type: 'array',
    contains: {
        type: 'WorkflowStatusesId',
    },
},
    },
} as const;