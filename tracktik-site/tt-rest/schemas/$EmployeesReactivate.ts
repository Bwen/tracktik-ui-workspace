/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeesReactivate = {
    properties: {
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
    },
} as const;