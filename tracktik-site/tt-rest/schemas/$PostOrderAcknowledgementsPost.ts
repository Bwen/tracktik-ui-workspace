/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderAcknowledgementsPost = {
    properties: {
        status: {
    type: 'Enum',
    isRequired: true,
},
        postOrder: {
    type: 'all-of',
    contains: [{
    type: 'PostOrdersId',
}],
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
    },
} as const;