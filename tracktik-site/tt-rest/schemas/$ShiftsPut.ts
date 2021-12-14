/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsPut = {
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