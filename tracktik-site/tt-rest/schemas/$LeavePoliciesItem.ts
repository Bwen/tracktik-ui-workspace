/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePoliciesItem = {
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
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        leaveType: {
    type: 'one-of',
    contains: [{
    type: 'LeaveTypesId',
}, {
    type: 'LeaveTypesItem',
}],
},
        paySettings: {
    type: 'one-of',
    contains: [{
    type: 'LeavePolicyPaySettingsId',
}, {
    type: 'LeavePolicyPaySettingsItem',
}],
},
        status: {
    type: 'Enum',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;