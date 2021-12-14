/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveRequestsPatch = {
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
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        leaveType: {
    type: 'all-of',
    contains: [{
    type: 'LeaveTypesId',
}],
},
    },
} as const;