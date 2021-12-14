/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyGroupsAssignLeavePolicy = {
    properties: {
        leavePolicy: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;