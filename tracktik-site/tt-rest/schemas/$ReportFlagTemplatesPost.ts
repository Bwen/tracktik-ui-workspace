/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagTemplatesPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        details: {
    type: 'string',
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        reportFields: {
    type: 'array',
    contains: {
        type: 'ReportTemplateFieldsId',
    },
},
        adminOnly: {
    type: 'boolean',
},
        reports: {
    type: 'array',
    contains: {
        type: 'ReportsId',
    },
},
    },
} as const;