/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportsItem = {
    properties: {
        reportTemplate: {
    type: 'one-of',
    contains: [{
    type: 'ReportTemplatesId',
}, {
    type: 'ReportTemplatesItem',
}],
},
        reportDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        submitTime: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        submittedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        reportFields: {
    type: 'array',
    contains: {
        type: 'ReportFieldsItem',
    },
},
        approvedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        approvalDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        status: {
    type: 'Enum',
},
        approvedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        checkpoint: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointsId',
}, {
    type: 'CheckpointsItem',
}],
},
        reportFlag: {
    type: 'one-of',
    contains: [{
    type: 'ReportFlagsId',
}, {
    type: 'ReportFlagsItem',
}],
},
        siteLocation: {
    type: 'one-of',
    contains: [{
    type: 'SiteLocationsId',
}, {
    type: 'SiteLocationsItem',
}],
},
        geoLocation: {
    type: 'one-of',
    contains: [{
    type: 'GeoLocationsId',
}, {
    type: 'GeoLocationsItem',
}],
},
        comments: {
    type: 'array',
    contains: {
        type: 'CommentsItem',
    },
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;