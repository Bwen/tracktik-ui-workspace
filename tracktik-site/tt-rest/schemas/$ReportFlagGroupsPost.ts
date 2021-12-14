/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupsPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        customId: {
    type: 'string',
},
        reportFlags: {
    type: 'array',
    contains: {
        type: 'ReportFlagsId',
    },
},
    },
} as const;