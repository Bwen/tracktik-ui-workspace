/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFieldsItem = {
    properties: {
        fieldTag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        report: {
    type: 'one-of',
    contains: [{
    type: 'ReportsId',
}, {
    type: 'ReportsItem',
}],
},
        templateField: {
    type: 'one-of',
    contains: [{
    type: 'ReportTemplateFieldsId',
}, {
    type: 'ReportTemplateFieldsItem',
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