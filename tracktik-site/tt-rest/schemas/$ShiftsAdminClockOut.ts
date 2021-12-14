/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsAdminClockOut = {
    properties: {
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        endTimeType: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;