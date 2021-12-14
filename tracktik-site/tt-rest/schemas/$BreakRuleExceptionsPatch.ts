/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleExceptionsPatch = {
    properties: {
        type: {
    type: 'Enum',
},
        reasonType: {
    type: 'Enum',
},
        actionDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        comment: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        summary: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        workSession: {
    type: 'all-of',
    contains: [{
    type: 'WorkSessionsId',
}],
},
        breakSession: {
    type: 'all-of',
    contains: [{
    type: 'BreakSessionsId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        breakRule: {
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
},
        condition: {
    type: 'all-of',
    contains: [{
    type: 'BreakRuleConditionsId',
}],
},
        device: {
    type: 'all-of',
    contains: [{
    type: 'AppLicensesId',
}],
},
        deviceAccount: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;