/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'ReportFlagCategoriesId',
}],
},
        alias: {
    type: 'all-of',
    contains: [{
    type: 'ReportFlagsId',
}],
},
        isGlobal: {
    type: 'boolean',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        reportFlagTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportFlagTemplatesId',
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
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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