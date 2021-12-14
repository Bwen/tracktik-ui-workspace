/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupAssignmentsCollection = {
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
    },
} as const;