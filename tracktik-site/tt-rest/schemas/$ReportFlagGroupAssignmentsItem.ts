/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagGroupAssignmentsItem = {
    properties: {
        reportFlag: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagsId',
}, {
    type: 'ReportFlagsItem',
}],
},
        reportFlagGroup: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagGroupsId',
}, {
    type: 'ReportFlagGroupsItem',
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