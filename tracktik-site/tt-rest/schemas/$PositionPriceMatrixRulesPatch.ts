/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPriceMatrixRulesPatch = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        days: {
    type: 'Enum',
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        isPercentage: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
    },
} as const;