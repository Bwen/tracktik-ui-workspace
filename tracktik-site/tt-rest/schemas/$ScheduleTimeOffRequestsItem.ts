/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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
    type: 'one-of',
    contains: [{
    type: 'ScheduleTimeOffRequestTypesId',
}, {
    type: 'ScheduleTimeOffRequestTypesItem',
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
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
        timeZone: {
    type: 'string',
},
    },
} as const;