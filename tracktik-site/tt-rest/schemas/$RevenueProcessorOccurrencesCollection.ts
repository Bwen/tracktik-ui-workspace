/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RevenueProcessorOccurrencesCollection = {
    properties: {
        status: {
    type: 'Enum',
},
        executionStartedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        executionEndedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        site: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        processedItems: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        batchId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        triggeredFrom: {
    type: 'Enum',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;