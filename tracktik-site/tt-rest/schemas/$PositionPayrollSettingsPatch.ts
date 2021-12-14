/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPayrollSettingsPatch = {
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
},
        positionHourlyRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        holiday: {
    type: 'Enum',
},
        holidayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        holidayMultiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        holidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        payBreaks: {
    type: 'Enum',
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