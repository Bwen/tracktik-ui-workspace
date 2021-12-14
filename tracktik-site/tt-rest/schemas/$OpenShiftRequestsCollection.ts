/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OpenShiftRequestsCollection = {
    properties: {
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        requester: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        status: {
    type: 'Enum',
},
        statusReason: {
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