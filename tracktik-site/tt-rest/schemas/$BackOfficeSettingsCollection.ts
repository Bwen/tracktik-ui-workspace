/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BackOfficeSettingsCollection = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        scheduleCycleFirstDate: {
    type: 'Enum',
},
        scheduleTemplateFirstDayOfWeek: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        schedulePreferredPublishFrequency: {
    type: 'Enum',
},
        scheduleAllowForClosedBusinessDays: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        scheduleRequestEmployeeAcknowledge: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
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
},
        payrollOvertimeDayOfWeek: {
    type: 'Enum',
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
},
        autoApprovalClockInAfter: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        autoApprovalClockOutBefore: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        autoApprovalClockOutAfter: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
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