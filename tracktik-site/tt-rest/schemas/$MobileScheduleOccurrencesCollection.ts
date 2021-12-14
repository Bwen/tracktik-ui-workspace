/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrencesCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'TaskTypesId',
}],
},
        mobileRunsheet: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetsId',
}],
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        priceTier: {
    type: 'all-of',
    contains: [{
    type: 'PriceTiersId',
}],
},
        zonePosition: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
},
        mobileScheduleOccurrenceLog: {
    type: 'all-of',
    contains: [{
    type: 'MobileScheduleOccurrenceLogsId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;