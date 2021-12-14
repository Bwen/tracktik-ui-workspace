/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskPriceTiersItem = {
    properties: {
        customId: {
    type: 'string',
},
        name: {
    type: 'string',
},
        contract: {
    type: 'one-of',
    contains: [{
    type: 'ContractsId',
}, {
    type: 'ContractsItem',
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
        chargeType: {
    type: 'Enum',
},
        serviceModel: {
    type: 'Enum',
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        rateMatrix: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        instructions: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        effectiveDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        validUntilDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        cancellationThresholdInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Number',
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
        discount: {
    type: 'all-of',
    contains: [{
    type: 'Percentage',
}],
},
        fuelSurcharge: {
    type: 'all-of',
    contains: [{
    type: 'Percentage',
}],
},
        holiday: {
    type: 'Enum',
},
        holidayGroup: {
    type: 'one-of',
    contains: [{
    type: 'HolidayGroupsId',
}, {
    type: 'HolidayGroupsItem',
}],
},
        holidayMultiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        holidayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        holidayFlatRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;