/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileSchedulesCollection = {
    properties: {
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
    type: 'TimeStampDate',
}],
},
        beginServiceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        endServiceOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        endServiceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
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
        isAdhoc: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        adhocSelectable: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
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
    },
} as const;