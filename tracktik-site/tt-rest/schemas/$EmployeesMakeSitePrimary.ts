/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeesMakeSitePrimary = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
    },
} as const;