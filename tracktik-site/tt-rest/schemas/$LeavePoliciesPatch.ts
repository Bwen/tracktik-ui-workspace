/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePoliciesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        displayLeaveIn: {
    type: 'Enum',
},
        leaveType: {
    type: 'all-of',
    contains: [{
    type: 'LeaveTypesId',
}],
},
        paySettings: {
    type: 'all-of',
    contains: [{
    type: 'LeavePolicyPaySettingsPatch',
}],
},
    },
} as const;