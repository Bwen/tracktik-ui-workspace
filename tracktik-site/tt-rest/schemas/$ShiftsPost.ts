/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsPost = {
    properties: {
        status: {
    type: 'Enum',
    isRequired: true,
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
    isRequired: true,
},
        payable: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        paidTimeOff: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
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
    isRequired: true,
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
    isRequired: true,
},
        breakInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
    isRequired: true,
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
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        notes: {
    type: 'array',
    contains: {
        type: 'ShiftNotesId',
    },
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
        payCodeLabel: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        breakRuleExceptions: {
    type: 'array',
    contains: {
        type: 'BreakRuleExceptionsId',
    },
},
    },
} as const;