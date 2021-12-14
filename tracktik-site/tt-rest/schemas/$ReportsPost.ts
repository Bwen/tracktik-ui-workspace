/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportsPost = {
    properties: {
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
    isRequired: true,
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        reportFields: {
    type: 'array',
    contains: {
        type: 'ReportFieldsId',
    },
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
        checkpoint: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
}],
},
        geoLocation: {
    type: 'all-of',
    contains: [{
    type: 'GeoLocationsPost',
}],
},
    },
} as const;