/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePoliciesPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        displayLeaveIn: {
    type: 'Enum',
    isRequired: true,
},
        leaveType: {
    type: 'all-of',
    contains: [{
    type: 'LeaveTypesId',
}],
    isRequired: true,
},
        paySettings: {
    type: 'all-of',
    contains: [{
    type: 'LeavePolicyPaySettingsPut',
}],
    isRequired: true,
},
    },
} as const;