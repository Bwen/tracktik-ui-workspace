/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftNotesItem = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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
        type: {
    type: 'Enum',
},
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
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