/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrencesPost = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        status: {
    type: 'array',
    contains: {
        type: 'ContractOccurrenceLogsId',
    },
},
        log: {
    type: 'all-of',
    contains: [{
    type: 'ContractOccurrenceLogsId',
}],
},
    },
} as const;