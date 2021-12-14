/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyGroupsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        leavePolicies: {
    type: 'array',
    contains: {
        type: 'LeavePoliciesId',
    },
},
        employees: {
    type: 'array',
    contains: {
        type: 'EmployeesId',
    },
},
    },
} as const;