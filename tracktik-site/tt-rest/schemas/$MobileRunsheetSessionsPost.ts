/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetSessionsPost = {
    properties: {
        status: {
    type: 'Enum',
    isRequired: true,
},
        actionDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        periodDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        startedOn: {
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
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        mobileRunsheet: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetsId',
}],
    isRequired: true,
},
        workSession: {
    type: 'all-of',
    contains: [{
    type: 'WorkSessionsId',
}],
},
        mobileScheduleOccurrenceLogs: {
    type: 'array',
    contains: {
        type: 'MobileScheduleOccurrenceLogsId',
    },
},
        incompleteRunsheetReason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;