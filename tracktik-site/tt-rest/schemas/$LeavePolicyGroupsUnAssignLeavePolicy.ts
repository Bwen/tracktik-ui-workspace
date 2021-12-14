/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyGroupsUnAssignLeavePolicy = {
    properties: {
        leavePolicy: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;