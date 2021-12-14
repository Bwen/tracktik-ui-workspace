/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestsCollection = {
    properties: {
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        startOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        startOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        endOffPeriodDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        endOffPeriod: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        status: {
    type: 'Enum',
},
        reason: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        reviewer: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        reviewedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        reviewedDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        type: {
    type: 'all-of',
    contains: [{
    type: 'ScheduleTimeOffRequestTypesId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
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
        timeZone: {
    type: 'string',
},
    },
} as const;