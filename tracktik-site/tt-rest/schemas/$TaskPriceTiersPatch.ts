/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskPriceTiersPatch = {
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
    },
} as const;