/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleOffPeriodsItem = {
    properties: {
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startOffPeriod: {
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
        endOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        active: {
    type: 'boolean',
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