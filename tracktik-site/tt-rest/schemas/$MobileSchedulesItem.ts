/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileSchedulesItem = {
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
    },
} as const;