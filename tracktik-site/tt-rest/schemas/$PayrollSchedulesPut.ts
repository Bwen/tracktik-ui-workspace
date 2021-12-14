/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollSchedulesPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        overlapingStrategy: {
    type: 'Enum',
    isRequired: true,
},
        overlappingStrategy: {
    type: 'Enum',
    isRequired: true,
},
        holidayOverlapingStrategy: {
    type: 'Enum',
    isRequired: true,
},
        holidayOverlappingStrategy: {
    type: 'Enum',
    isRequired: true,
},
        isOvertimeWeighted: {
    type: 'boolean',
},
        multiplePayCodesStrategy: {
    type: 'Enum',
},
    },
} as const;