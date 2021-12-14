/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollPayrunsItem = {
    properties: {
        payrollSchedule: {
    type: 'one-of',
    contains: [{
    type: 'PayrollSchedulesId',
}, {
    type: 'PayrollSchedulesItem',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        approvedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        items: {
    type: 'array',
    contains: {
        type: 'PayrollPayrunItemsItem',
    },
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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