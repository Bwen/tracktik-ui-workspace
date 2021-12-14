/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionsPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
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
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
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
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
},
        billingSetting: {
    type: 'all-of',
    contains: [{
    type: 'PositionBillingSettingsPut',
}],
},
        payrollSetting: {
    type: 'all-of',
    contains: [{
    type: 'PositionPayrollSettingsPut',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        payCodeLabel: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        expenseReimbursements: {
    type: 'array',
    contains: {
        type: 'PositionExpenseReimbursementsId',
    },
},
    },
} as const;