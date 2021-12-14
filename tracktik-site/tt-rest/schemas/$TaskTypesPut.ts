/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskTypesPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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