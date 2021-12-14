/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskTypesPatch = {
    properties: {
        name: {
    type: 'string',
},
        dispatchable: {
    type: 'boolean',
},
        schedulable: {
    type: 'boolean',
},
        billable: {
    type: 'boolean',
},
        prefix: {
    type: 'string',
},
        active: {
    type: 'boolean',
},
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
},
        priority: {
    type: 'Enum',
},
    },
} as const;