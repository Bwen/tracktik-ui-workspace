/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveRequestsItem = {
    properties: {
        reason: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
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
        status: {
    type: 'Enum',
},
        leaveType: {
    type: 'one-of',
    contains: [{
    type: 'LeaveTypesId',
}, {
    type: 'LeaveTypesItem',
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
        reviewReason: {
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
    },
} as const;