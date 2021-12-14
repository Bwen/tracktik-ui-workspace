/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFieldsCollection = {
    properties: {
        fieldTag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
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
        valueLabel: {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;