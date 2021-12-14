/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportTemplateFieldsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'ReportTemplatesId',
}, {
    type: 'ReportTemplatesItem',
}],
},
        confidential: {
    type: 'boolean',
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;