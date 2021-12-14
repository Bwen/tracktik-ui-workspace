/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskPriceTiersPost = {
    properties: {
        customId: {
    type: 'string',
},
        name: {
    type: 'string',
    isRequired: true,
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
    isRequired: true,
},
        serviceModel: {
    type: 'Enum',
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        rateMatrix: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
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