/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollSchedulesItem = {
    properties: {
        name: {
    type: 'string',
},
        frequency: {
    type: 'Enum',
},
        semiMonthlyFirstReferenceDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        semiMonthlySecondReferenceDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        isHolidayCountedInOvertime: {
    type: 'boolean',
},
        holidaysAlignedWithPeriodStartTime: {
    type: 'boolean',
},
        periodStartTime: {
    type: 'string',
},
        periodStartDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        isGlobal: {
    type: 'boolean',
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        status: {
    type: 'Enum',
},
        overlapingStrategy: {
    type: 'Enum',
},
        overlappingStrategy: {
    type: 'Enum',
},
        holidayOverlapingStrategy: {
    type: 'Enum',
},
        holidayOverlappingStrategy: {
    type: 'Enum',
},
        isOvertimeWeighted: {
    type: 'boolean',
},
        multiplePayCodesStrategy: {
    type: 'Enum',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
    },
} as const;