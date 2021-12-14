/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollScheduleOccurrencesPut = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        payrollSchedule: {
    type: 'all-of',
    contains: [{
    type: 'PayrollSchedulesId',
}],
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        subRegionId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;