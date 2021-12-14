/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveRequestsDecline = {
    properties: {
        reason: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
    },
} as const;