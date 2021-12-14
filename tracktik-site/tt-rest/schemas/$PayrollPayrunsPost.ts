/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollPayrunsPost = {
    properties: {
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
        items: {
    type: 'array',
    contains: {
        type: 'PayrollPayrunItemsId',
    },
},
    },
} as const;