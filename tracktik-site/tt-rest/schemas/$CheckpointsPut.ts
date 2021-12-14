/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointsPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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
    isRequired: true,
},
        scanActionType: {
    type: 'Enum',
    isRequired: true,
},
        scanActionMessage: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        scanReportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
    isRequired: true,
},
        scanActionQuestion: {
    type: 'string',
    isRequired: true,
},
        scanActionMultiple: {
    properties: {
    },
    isRequired: true,
},
        monitoringOption: {
    type: 'Enum',
    isRequired: true,
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
    type: 'GeoLocationsPut',
}],
},
    },
} as const;