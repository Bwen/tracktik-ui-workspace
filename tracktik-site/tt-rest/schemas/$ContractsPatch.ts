/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractsPatch = {
    properties: {
        customId: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        billingFrequency: {
    type: 'Enum',
},
        billingFrequencyType: {
    type: 'Enum',
},
        billingStartDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        semiMonthlyFirstReferenceDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        semiMonthlySecondReferenceDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        invoiceDayToAdd: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        name: {
    type: 'string',
},
        paymentMethod: {
    type: 'all-of',
    contains: [{
    type: 'PaymentMethodsId',
}],
},
        paymentTerms: {
    type: 'Enum',
},
        externalId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        proposalNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        estimatedPerPeriodRevenue: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        serviceEndDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        serviceStartDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        status: {
    type: 'Enum',
},
        type: {
    type: 'Enum',
},
        contractServiceModels: {
    type: 'array',
    contains: {
        type: 'ContractServiceModelsId',
    },
},
        serviceTypes: {
    type: 'array',
    contains: {
        type: 'ContractServiceModelsId',
    },
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsId',
    },
},
    },
} as const;