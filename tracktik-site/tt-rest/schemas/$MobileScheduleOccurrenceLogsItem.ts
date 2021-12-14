/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrenceLogsItem = {
    properties: {
        actionDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        status: {
    type: 'Enum',
},
        lastStatusOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        lastStatusTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        onSiteOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        onSiteTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        enRouteOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        enRouteTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        completedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        completedTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        mobileRunsheetSession: {
    type: 'one-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
}, {
    type: 'MobileRunsheetSessionsItem',
}],
},
        mobileSchedule: {
    type: 'one-of',
    contains: [{
    type: 'MobileSchedulesId',
}, {
    type: 'MobileSchedulesItem',
}],
},
        mobileScheduleOccurrence: {
    type: 'one-of',
    contains: [{
    type: 'MobileScheduleOccurrencesId',
}, {
    type: 'MobileScheduleOccurrencesItem',
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
        report: {
    type: 'one-of',
    contains: [{
    type: 'ReportsId',
}, {
    type: 'ReportsItem',
}],
},
        mobileScheduleOccurrenceReassignments: {
    type: 'array',
    contains: {
        type: 'MobileScheduleOccurrenceReassignmentsItem',
    },
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