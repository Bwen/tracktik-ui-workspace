/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillableItemsPut = {
    properties: {
        type: {
    type: 'Enum',
},
        classModel: {
    type: 'string',
    isRequired: true,
},
        classModelId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        serviceModel: {
    properties: {
        type: {
    type: 'Enum',
},
        object: {
    type: 'one-of',
    contains: [{
    type: 'BillingAdhocItemsItem',
}, {
    type: 'ShiftsItem',
}, {
    type: 'TaskPriceTiersItem',
}, {
    type: 'InvoiceLinesItem',
}, {
    type: 'PositionsItem',
}, {
    type: 'MobileScheduleOccurrenceLogsItem',
}, {
    type: 'DispatchTasksItem',
}],
},
    },
},
        quantity: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
    isRequired: true,
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        contractOccurrenceDate: {
    type: 'string',
},
        invoiceLine: {
    type: 'all-of',
    contains: [{
    type: 'InvoiceLinesId',
}],
},
        serviceLocation: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        serviceAccount: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        clientAccount: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        postedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        postDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        postBatchCustom: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        memo: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
    isRequired: true,
},
        statAmount: {
    type: 'string',
},
        statType: {
    type: 'Enum',
},
        priceTierModel: {
    type: 'string',
},
        priceTierId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        priceTierModelObject: {
    properties: {
        type: {
    type: 'Enum',
},
        object: {
    type: 'one-of',
    contains: [{
    type: 'BillingAdhocItemsItem',
}, {
    type: 'TaskPriceTiersItem',
}, {
    type: 'PositionsItem',
}],
},
    },
},
        serviceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        groupKey: {
    type: 'string',
},
        billingNotes: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        subType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;