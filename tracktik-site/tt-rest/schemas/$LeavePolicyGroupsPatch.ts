/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyGroupsPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
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