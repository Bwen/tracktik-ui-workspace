/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePoliciesPost = {
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
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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
        paySettings: {
    type: 'all-of',
    contains: [{
    type: 'LeavePolicyPaySettingsPost',
}],
    isRequired: true,
},
    },
} as const;