/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftLogsItem = {
    properties: {
        changeType: {
    type: 'Enum',
},
        shiftId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
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
        note: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        shiftDetails: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        isValid: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
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