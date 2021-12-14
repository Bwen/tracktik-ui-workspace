/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsAdminClockIn = {
    properties: {
        startTimeType: {
    type: 'Enum',
    isRequired: true,
},
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
    },
} as const;