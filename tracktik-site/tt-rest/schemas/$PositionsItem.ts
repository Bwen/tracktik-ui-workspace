/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        contract: {
    type: 'one-of',
    contains: [{
    type: 'ContractsId',
}, {
    type: 'ContractsItem',
}],
},
        nonBillable: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        shiftMemo: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        beginDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        endDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
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
        billingSetting: {
    type: 'one-of',
    contains: [{
    type: 'PositionBillingSettingsId',
}, {
    type: 'PositionBillingSettingsItem',
}],
},
        payrollSetting: {
    type: 'one-of',
    contains: [{
    type: 'PositionPayrollSettingsId',
}, {
    type: 'PositionPayrollSettingsItem',
}],
},
        taxClass: {
    type: 'one-of',
    contains: [{
    type: 'TaxClassesId',
}, {
    type: 'TaxClassesItem',
}],
},
        payCodeLabel: {
    type: 'one-of',
    contains: [{
    type: 'PayrollCodesId',
}, {
    type: 'PayrollCodesItem',
}],
},
        expenseReimbursements: {
    type: 'array',
    contains: {
        type: 'PositionExpenseReimbursementsItem',
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
    },
} as const;