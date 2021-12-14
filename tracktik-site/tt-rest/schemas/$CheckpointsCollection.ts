/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
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
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
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
    type: 'all-of',
    contains: [{
    type: 'ReportFlagsId',
}],
},
        siteLocation: {
    type: 'all-of',
    contains: [{
    type: 'SiteLocationsId',
}],
},
        geoLocation: {
    type: 'all-of',
    contains: [{
    type: 'GeoLocationsCollection',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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