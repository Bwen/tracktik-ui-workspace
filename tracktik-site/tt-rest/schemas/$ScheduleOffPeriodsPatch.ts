/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleOffPeriodsPatch = {
    properties: {
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        active: {
    type: 'boolean',
},
    },
} as const;