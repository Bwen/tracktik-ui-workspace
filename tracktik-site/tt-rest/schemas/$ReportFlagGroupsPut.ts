/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupsPut = {
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