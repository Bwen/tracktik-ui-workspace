/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveRequestsPut = {
    properties: {
        reason: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        leaveType: {
    type: 'all-of',
    contains: [{
    type: 'LeaveTypesId',
}],
    isRequired: true,
},
    },
} as const;