/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointsItem = {
    properties: {
        name: {
    type: 'string',
},
        instructions: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
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
        active: {
    type: 'boolean',
},
        scanActionType: {
    type: 'Enum',
},
        scanActionMessage: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        scanReportTemplate: {
    type: 'one-of',
    contains: [{
    type: 'ReportTemplatesId',
}, {
    type: 'ReportTemplatesItem',
}],
},
        scanActionQuestion: {
    type: 'string',
},
        scanActionMultiple: {
    properties: {
    },
},
        monitoringOption: {
    type: 'Enum',
},
        monitorType: {
    type: 'Enum',
},
        scanCode: {
    type: 'string',
},
        allowManualScan: {
    type: 'boolean',
},
        manualScan: {
    type: 'string',
},
        exceptionCategory: {
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
    },
} as const;