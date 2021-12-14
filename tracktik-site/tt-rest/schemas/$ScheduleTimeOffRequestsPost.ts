/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestsPost = {
    properties: {
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        startOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
    isRequired: true,
},
        startOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        endOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
    isRequired: true,
},
        endOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        type: {
    type: 'all-of',
    contains: [{
    type: 'ScheduleTimeOffRequestTypesId',
}],
    isRequired: true,
},
    },
} as const;