/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestsPatch = {
    properties: {
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        startOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        startOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        endOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        endOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        type: {
    type: 'all-of',
    contains: [{
    type: 'ScheduleTimeOffRequestTypesId',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;