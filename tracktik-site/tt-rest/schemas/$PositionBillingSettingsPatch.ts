/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionBillingSettingsPatch = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        type: {
    type: 'Enum',
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        discountRate: {
    type: 'all-of',
    contains: [{
    type: 'Percentage',
}],
},
        holidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
},
        billBreaks: {
    type: 'Enum',
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
        overtimeRule: {
    type: 'all-of',
    contains: [{
    type: 'OvertimeRulesId',
}],
},
        billPremiums: {
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