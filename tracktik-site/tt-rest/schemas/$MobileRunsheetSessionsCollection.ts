/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetSessionsCollection = {
    properties: {
        status: {
    type: 'Enum',
},
        actionDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        periodDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        mobileRunsheet: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetsId',
}],
},
        workSession: {
    type: 'all-of',
    contains: [{
    type: 'WorkSessionsId',
}],
},
        incompleteRunsheetReason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;