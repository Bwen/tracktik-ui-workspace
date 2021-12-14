/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPremiumsPut = {
    properties: {
        status: {
    type: 'Enum',
},
        type: {
    type: 'Enum',
},
        code: {
    type: 'string',
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        amount: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        isOvertime: {
    type: 'string',
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsId',
    },
},
    },
} as const;