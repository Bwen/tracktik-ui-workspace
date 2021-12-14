/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagsPatch = {
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
        reportFlagGroups: {
    type: 'array',
    contains: {
        type: 'ReportFlagGroupsId',
    },
},
    },
} as const;