/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftLogsPost = {
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
    isRequired: true,
},
    },
} as const;