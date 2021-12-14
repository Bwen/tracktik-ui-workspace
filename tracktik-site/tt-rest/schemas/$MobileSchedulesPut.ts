/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileSchedulesPut = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dayOfWeekStart: {
    type: 'Enum',
    isRequired: true,
},
        dayOfWeekEnd: {
    type: 'Enum',
},
        rangeStartTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        timeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
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
    isRequired: true,
},
        beginServiceOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        beginServiceDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
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
    isRequired: true,
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
    },
} as const;