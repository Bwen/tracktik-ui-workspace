/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsCollection = {
    properties: {
        status: {
    type: 'Enum',
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        billable: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        payable: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        paidTimeOff: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        vacant: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        onShiftBoard: {
    type: 'boolean',
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        startsOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startTimestamp: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        endsOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endTimestamp: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        breakInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        published: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        modifiedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        lastModified: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        notified: {
    type: 'boolean',
},
        acknowledged: {
    type: 'boolean',
},
        viewed: {
    type: 'boolean',
},
        locked: {
    type: 'boolean',
},
        plannedDurationHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        plannedPayableHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        clockedHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        approvedHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        billableHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        payableHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        payRateLevel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        payRate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        billRate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        attendanceStatus: {
    type: 'Enum',
},
        overtimeHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        paidAmount: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        billedAmount: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        holidayHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        payCodeLabel: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
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
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;