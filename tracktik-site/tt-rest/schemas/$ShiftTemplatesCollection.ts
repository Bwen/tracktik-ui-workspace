/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplatesCollection = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        startDayIndex: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
},
        startDayLabel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        endDayIndex: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        endDayLabel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        beginDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        endDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        vacant: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        onShiftBoard: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        breakInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;