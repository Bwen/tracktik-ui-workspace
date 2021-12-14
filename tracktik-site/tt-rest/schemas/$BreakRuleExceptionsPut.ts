/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleExceptionsPut = {
    properties: {
        type: {
    type: 'Enum',
    isRequired: true,
},
        reasonType: {
    type: 'Enum',
    isRequired: true,
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
    isRequired: true,
},
        summary: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
},
        breakRule: {
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
    isRequired: true,
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
    },
} as const;