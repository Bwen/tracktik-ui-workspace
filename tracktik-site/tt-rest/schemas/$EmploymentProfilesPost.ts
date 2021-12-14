/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentProfilesPost = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        employeeType: {
    type: 'Enum',
    isRequired: true,
},
        employeeClass: {
    type: 'all-of',
    contains: [{
    type: 'EmployeeClassesId',
}],
},
        employmentDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        payRateType: {
    type: 'Enum',
    isRequired: true,
},
        hourlyRateType: {
    type: 'Enum',
    isRequired: true,
},
        hourlyRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        yearlyPayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        overtimeExempt: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        payrollSchedule: {
    type: 'all-of',
    contains: [{
    type: 'PayrollSchedulesId',
}],
},
        hasGrievance: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        weeklyHoursTarget: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        weeklyHoursMaximum: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        weeklyHoursMinimum: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        overtimeRule: {
    type: 'all-of',
    contains: [{
    type: 'OvertimeRulesId',
}],
},
    },
} as const;