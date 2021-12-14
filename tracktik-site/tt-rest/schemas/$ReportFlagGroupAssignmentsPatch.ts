/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupAssignmentsPatch = {
    properties: {
        reportFlag: {
    type: 'all-of',
    contains: [{
    type: 'ReportFlagsId',
}],
},
        reportFlagGroup: {
    type: 'all-of',
    contains: [{
    type: 'ReportFlagGroupsId',
}],
},
    },
} as const;