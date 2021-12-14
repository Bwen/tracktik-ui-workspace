/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagsItem = {
    properties: {
        name: {
    type: 'string',
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        guidReferenceId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        showInDefaultGroup: {
    type: 'boolean',
},
        severityLevel: {
    type: 'Enum',
},
        customId: {
    type: 'string',
},
        category: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagCategoriesId',
}, {
    type: 'ReportFlagCategoriesItem',
}],
},
        alias: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagsId',
}, {
    type: 'ReportFlagsItem',
}],
},
        isGlobal: {
    type: 'boolean',
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        reportFlagTemplate: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagTemplatesId',
}, {
    type: 'ReportFlagTemplatesItem',
}],
},
        reportFlagGroups: {
    type: 'array',
    contains: {
        type: 'ReportFlagGroupsItem',
    },
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