/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsApprove = {
    properties: {
        approvedHours: {
    type: 'number',
},
        payableHours: {
    type: 'number',
},
        billableHours: {
    type: 'number',
},
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
    },
} as const;