/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollScheduleOccurrencesItem = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        payrollSchedule: {
    type: 'one-of',
    contains: [{
    type: 'PayrollSchedulesId',
}, {
    type: 'PayrollSchedulesItem',
}],
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        subRegionId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        employees: {
    type: 'array',
    contains: {
        type: 'EmployeesItem',
    },
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