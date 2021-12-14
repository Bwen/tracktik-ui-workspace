/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrenceLogsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
}],
},
        mobileSchedule: {
    type: 'all-of',
    contains: [{
    type: 'MobileSchedulesId',
}],
},
        mobileScheduleOccurrence: {
    type: 'all-of',
    contains: [{
    type: 'MobileScheduleOccurrencesId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        report: {
    type: 'all-of',
    contains: [{
    type: 'ReportsId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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