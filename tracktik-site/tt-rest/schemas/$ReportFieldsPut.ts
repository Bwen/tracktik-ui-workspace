/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFieldsPut = {
    properties: {
        report: {
    type: 'all-of',
    contains: [{
    type: 'ReportsId',
}],
},
        templateField: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplateFieldsId',
}],
},
        value: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        archived: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;