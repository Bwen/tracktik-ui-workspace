/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointsPatch = {
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
    type: 'GeoLocationsPatch',
}],
},
    },
} as const;