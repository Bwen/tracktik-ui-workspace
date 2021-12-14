/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPayrollSettingsPost = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        payPositionRate: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        positionHourlyRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        holiday: {
    type: 'Enum',
},
        holidayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        holidayMultiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        holidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
    isRequired: true,
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        payBreaks: {
    type: 'Enum',
    isRequired: true,
},
        payPremiums: {
    type: 'array',
    contains: {
        type: 'PositionPremiumsId',
    },
},
        priceMatrixRules: {
    type: 'array',
    contains: {
        type: 'PositionPriceMatrixRulesId',
    },
},
    },
} as const;