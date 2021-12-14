/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagsPut = {
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
        reportFlagGroups: {
    type: 'array',
    contains: {
        type: 'ReportFlagGroupsId',
    },
},
    },
} as const;