/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupsPatch = {
    properties: {
        name: {
    type: 'string',
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