/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftLogsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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