/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsPatch = {
    properties: {
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
        onShiftBoard: {
    type: 'boolean',
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
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
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
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
        timeZone: {
    type: 'string',
},
    },
} as const;