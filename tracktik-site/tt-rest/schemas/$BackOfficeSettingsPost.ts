/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BackOfficeSettingsPost = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        scheduleCycleFirstDate: {
    type: 'Enum',
    isRequired: true,
},
        scheduleTemplateFirstDayOfWeek: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        schedulePreferredPublishFrequency: {
    type: 'Enum',
    isRequired: true,
},
        scheduleAllowForClosedBusinessDays: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        scheduleRequestEmployeeAcknowledge: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        scheduleMinimumRestPeriodBetweenShift: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        scheduleHolidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
    isRequired: true,
},
        payrollHourlyRate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        payrollSchedule: {
    type: 'all-of',
    contains: [{
    type: 'PayrollSchedulesId',
}],
},
        payrollOvertimeRule: {
    type: 'all-of',
    contains: [{
    type: 'OvertimeRulesId',
}],
    isRequired: true,
},
        payrollOvertimeDayOfWeek: {
    type: 'Enum',
    isRequired: true,
},
        autoApprovalShift: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        autoApprovalClockInBefore: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
},
        autoApprovalClockInAfter: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
},
        autoApprovalClockOutBefore: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
},
        autoApprovalClockOutAfter: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
},
        payrollSorting: {
    type: 'Enum',
},
        payrollSeparatePremium: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        billingTaxEngine: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        billingTaxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        billingBaseCurrency: {
    type: 'Enum',
},
        billingSeparatePremium: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;