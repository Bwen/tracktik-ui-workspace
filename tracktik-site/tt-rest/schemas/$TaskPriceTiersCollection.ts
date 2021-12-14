/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskPriceTiersCollection = {
    properties: {
        customId: {
    type: 'string',
},
        name: {
    type: 'string',
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
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
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;