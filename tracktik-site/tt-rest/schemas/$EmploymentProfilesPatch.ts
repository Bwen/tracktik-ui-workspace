/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentProfilesPatch = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        employeeType: {
    type: 'Enum',
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
},
        payRateType: {
    type: 'Enum',
},
        hourlyRateType: {
    type: 'Enum',
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