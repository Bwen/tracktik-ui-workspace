/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyGroupsUnAssignEmployees = {
    properties: {
        employees: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;