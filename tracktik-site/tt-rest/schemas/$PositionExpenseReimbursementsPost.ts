/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionExpenseReimbursementsPost = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
    isRequired: true,
},
    },
} as const;