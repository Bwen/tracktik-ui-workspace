/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillableItemsPatch = {
    properties: {
        type: {
    type: 'Enum',
},
        classModel: {
    type: 'string',
},
        classModelId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
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
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
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
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
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