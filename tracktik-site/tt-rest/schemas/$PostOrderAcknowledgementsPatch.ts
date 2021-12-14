/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderAcknowledgementsPatch = {
    properties: {
        status: {
    type: 'Enum',
},
        postOrder: {
    type: 'all-of',
    contains: [{
    type: 'PostOrdersId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
    },
} as const;