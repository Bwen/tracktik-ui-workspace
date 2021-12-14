/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportTemplateFieldsPatch = {
    properties: {
        label: {
    type: 'string',
},
        name: {
    type: 'string',
},
        type: {
    type: 'Enum',
},
        required: {
    type: 'boolean',
},
        adminOnly: {
    type: 'boolean',
},
        displayOrder: {
    type: 'all-of',
    contains: [{
    type: 'SortIndex',
}],
},
        extra: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        list: {
    type: 'string',
},
        listItems: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        isDispatcherField: {
    type: 'boolean',
},
        fieldTag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
},
        confidential: {
    type: 'boolean',
},
    },
} as const;