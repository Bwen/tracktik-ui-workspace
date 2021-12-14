/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrenceLogsPost = {
    properties: {
        actionDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
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
    isRequired: true,
},
        mobileSchedule: {
    type: 'all-of',
    contains: [{
    type: 'MobileSchedulesId',
}],
    isRequired: true,
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
    isRequired: true,
},
        report: {
    type: 'all-of',
    contains: [{
    type: 'ReportsId',
}],
},
    },
} as const;