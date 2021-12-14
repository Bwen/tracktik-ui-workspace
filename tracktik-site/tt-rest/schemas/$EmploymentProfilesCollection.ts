/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentProfilesCollection = {
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
        seniority: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
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
        terminationDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        terminationReason: {
    type: 'all-of',
    contains: [{
    type: 'EmploymentTerminationReasonsId',
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