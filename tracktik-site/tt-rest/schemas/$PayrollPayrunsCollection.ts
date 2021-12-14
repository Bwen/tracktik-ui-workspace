/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollPayrunsCollection = {
    properties: {
        payrollSchedule: {
    type: 'all-of',
    contains: [{
    type: 'PayrollSchedulesId',
}],
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        occurrenceStartDate: {
    type: 'string',
},
        occurrenceEndDate: {
    type: 'string',
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
        isProcessed: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        countEmployees: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        totalHours: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        totalCost: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        totalOvertimeCost: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        totalOvertimeHours: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        totalHolidayCost: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        totalHolidayHours: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        approvedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        approvedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;