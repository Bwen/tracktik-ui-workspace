/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionBillingSettingsPut = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        billItem: {
    type: 'all-of',
    contains: [{
    type: 'BillItemsId',
}],
    isRequired: true,
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
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
    isRequired: true,
},
        billBreaks: {
    type: 'Enum',
    isRequired: true,
},
        holiday: {
    type: 'Enum',
    isRequired: true,
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