/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionExpenseReimbursementsPatch = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
    },
} as const;