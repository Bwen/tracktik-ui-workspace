/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagsPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        showInDefaultGroup: {
    type: 'boolean',
    isRequired: true,
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
    isRequired: true,
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
        reportFlagGroups: {
    type: 'array',
    contains: {
        type: 'ReportFlagGroupsId',
    },
},
    },
} as const;