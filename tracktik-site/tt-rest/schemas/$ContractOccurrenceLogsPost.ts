/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrenceLogsPost = {
    properties: {
        status: {
    type: 'Enum',
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
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
    isRequired: true,
},
    },
} as const;