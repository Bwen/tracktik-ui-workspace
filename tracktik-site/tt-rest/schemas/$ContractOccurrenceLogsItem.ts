/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrenceLogsItem = {
    properties: {
        status: {
    type: 'Enum',
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        invoice: {
    type: 'one-of',
    contains: [{
    type: 'InvoicesId',
}, {
    type: 'InvoicesItem',
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
    },
} as const;