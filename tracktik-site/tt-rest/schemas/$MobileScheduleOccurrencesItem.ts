/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrencesItem = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dayOfWeekStart: {
    type: 'Enum',
},
        dayOfWeekEnd: {
    type: 'Enum',
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        rangeStartTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        rangeEndTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeRangeEnd: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        durationMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        beginServiceOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        beginServiceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endServiceOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endServiceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        mobileRunsheetSortOrder: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        rangeStartedDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        dateTimeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        rangeEndedDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        dateTimeRangeEnd: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        taskType: {
    type: 'one-of',
    contains: [{
    type: 'TaskTypesId',
}, {
    type: 'TaskTypesItem',
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
        client: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        priceTier: {
    type: 'one-of',
    contains: [{
    type: 'PriceTiersId',
}, {
    type: 'PriceTiersItem',
}],
},
        zonePosition: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        reportTemplate: {
    type: 'one-of',
    contains: [{
    type: 'ReportTemplatesId',
}, {
    type: 'ReportTemplatesItem',
}],
},
        mobileScheduleOccurrenceLog: {
    type: 'one-of',
    contains: [{
    type: 'MobileScheduleOccurrenceLogsId',
}, {
    type: 'MobileScheduleOccurrenceLogsItem',
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
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;