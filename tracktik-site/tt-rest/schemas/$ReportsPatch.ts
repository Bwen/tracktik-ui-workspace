/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportsPatch = {
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
    type: 'GeoLocationsPatch',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;