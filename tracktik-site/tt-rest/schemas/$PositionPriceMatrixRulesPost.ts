/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPriceMatrixRulesPost = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        days: {
    type: 'Enum',
    isRequired: true,
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
    isRequired: true,
},
        isPercentage: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
    isRequired: true,
},
    },
} as const;