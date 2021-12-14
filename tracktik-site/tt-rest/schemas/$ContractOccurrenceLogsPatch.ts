/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrenceLogsPatch = {
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
    },
} as const;