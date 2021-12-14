/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractOccurrencesItem = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        contractId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        status: {
    type: 'array',
    contains: {
        type: 'ContractOccurrenceLogsItem',
    },
},
        log: {
    type: 'one-of',
    contains: [{
    type: 'ContractOccurrenceLogsId',
}, {
    type: 'ContractOccurrenceLogsItem',
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