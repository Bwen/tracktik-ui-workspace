/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportTemplatesPatch = {
    properties: {
        name: {
    type: 'string',
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