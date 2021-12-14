/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleExceptionsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        workSession: {
    type: 'one-of',
    contains: [{
    type: 'WorkSessionsId',
}, {
    type: 'WorkSessionsItem',
}],
},
        breakSession: {
    type: 'one-of',
    contains: [{
    type: 'BreakSessionsId',
}, {
    type: 'BreakSessionsItem',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        breakRule: {
    type: 'one-of',
    contains: [{
    type: 'BreakRulesId',
}, {
    type: 'BreakRulesItem',
}],
},
        condition: {
    type: 'one-of',
    contains: [{
    type: 'BreakRuleConditionsId',
}, {
    type: 'BreakRuleConditionsItem',
}],
},
        device: {
    type: 'one-of',
    contains: [{
    type: 'AppLicensesId',
}, {
    type: 'AppLicensesItem',
}],
},
        deviceAccount: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;