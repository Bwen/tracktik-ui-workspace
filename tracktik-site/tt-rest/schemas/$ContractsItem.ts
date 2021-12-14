/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractsItem = {
    properties: {
        customId: {
    type: 'string',
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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
    type: 'one-of',
    contains: [{
    type: 'PaymentMethodsId',
}, {
    type: 'PaymentMethodsItem',
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
        type: 'ContractServiceModelsItem',
    },
},
        serviceTypes: {
    type: 'array',
    contains: {
        type: 'ContractServiceModelsItem',
    },
},
        occurrences: {
    type: 'array',
    contains: {
        type: 'ContractOccurrencesItem',
    },
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsItem',
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