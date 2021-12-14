/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportsPut = {
    properties: {
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
        checkpoint: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
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