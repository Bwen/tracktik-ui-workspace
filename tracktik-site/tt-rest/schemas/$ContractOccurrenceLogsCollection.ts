/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrenceLogsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'InvoicesId',
}],
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
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