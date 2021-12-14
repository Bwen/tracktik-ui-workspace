/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollSchedulesPatch = {
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
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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
    },
} as const;