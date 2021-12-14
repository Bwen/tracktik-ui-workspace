/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentProfilesItem = {
    properties: {
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        employeeType: {
    type: 'Enum',
},
        employeeClass: {
    type: 'one-of',
    contains: [{
    type: 'EmployeeClassesId',
}, {
    type: 'EmployeeClassesItem',
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
    type: 'one-of',
    contains: [{
    type: 'PayrollSchedulesId',
}, {
    type: 'PayrollSchedulesItem',
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
    type: 'one-of',
    contains: [{
    type: 'OvertimeRulesId',
}, {
    type: 'OvertimeRulesItem',
}],
},
        terminationDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        terminationReason: {
    type: 'one-of',
    contains: [{
    type: 'EmploymentTerminationReasonsId',
}, {
    type: 'EmploymentTerminationReasonsItem',
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