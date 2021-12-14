/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SystemUsageLogsCollection = {
    properties: {
        type: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        unit: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        logId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        occurredOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        time: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        data: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        logDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        date: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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