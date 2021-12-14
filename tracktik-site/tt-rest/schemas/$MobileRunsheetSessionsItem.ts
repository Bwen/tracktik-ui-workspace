/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetSessionsItem = {
    properties: {
        status: {
    type: 'Enum',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        mobileRunsheet: {
    type: 'one-of',
    contains: [{
    type: 'MobileRunsheetsId',
}, {
    type: 'MobileRunsheetsItem',
}],
},
        workSession: {
    type: 'one-of',
    contains: [{
    type: 'WorkSessionsId',
}, {
    type: 'WorkSessionsItem',
}],
},
        mobileScheduleOccurrenceLogs: {
    type: 'array',
    contains: {
        type: 'MobileScheduleOccurrenceLogsItem',
    },
},
        incompleteRunsheetReason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;