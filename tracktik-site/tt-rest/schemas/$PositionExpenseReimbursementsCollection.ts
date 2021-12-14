/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionExpenseReimbursementsCollection = {
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
    },
} as const;