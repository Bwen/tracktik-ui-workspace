/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillableItemsItem = {
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
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
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
        contractOccurrenceDate: {
    type: 'string',
},
        invoice: {
    type: 'one-of',
    contains: [{
    type: 'InvoicesId',
}, {
    type: 'InvoicesItem',
}],
},
        invoiceLine: {
    type: 'one-of',
    contains: [{
    type: 'InvoiceLinesId',
}, {
    type: 'InvoiceLinesItem',
}],
},
        serviceLocation: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        serviceAccount: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        clientAccount: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
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
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        billItem: {
    type: 'one-of',
    contains: [{
    type: 'BillItemsId',
}, {
    type: 'BillItemsItem',
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
        servicedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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