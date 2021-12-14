/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
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
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
},
        billingSetting: {
    type: 'all-of',
    contains: [{
    type: 'PositionBillingSettingsCollection',
}],
},
        payrollSetting: {
    type: 'all-of',
    contains: [{
    type: 'PositionPayrollSettingsCollection',
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
    },
} as const;