/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractsPost = {
    properties: {
        customId: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        billingFrequency: {
    type: 'Enum',
},
        billingFrequencyType: {
    type: 'Enum',
    isRequired: true,
},
        billingStartDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
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
    isRequired: true,
},
        semiMonthlySecondReferenceDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        invoiceDayToAdd: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        name: {
    type: 'string',
    isRequired: true,
},
        paymentMethod: {
    type: 'all-of',
    contains: [{
    type: 'PaymentMethodsId',
}],
    isRequired: true,
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
    isRequired: true,
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