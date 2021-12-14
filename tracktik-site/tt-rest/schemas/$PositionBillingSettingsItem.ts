/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionBillingSettingsItem = {
    properties: {
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        type: {
    type: 'Enum',
},
        billItem: {
    type: 'one-of',
    contains: [{
    type: 'BillItemsId',
}, {
    type: 'BillItemsItem',
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
    type: 'one-of',
    contains: [{
    type: 'HolidayGroupsId',
}, {
    type: 'HolidayGroupsItem',
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
    type: 'one-of',
    contains: [{
    type: 'OvertimeRulesId',
}, {
    type: 'OvertimeRulesItem',
}],
},
        billPremiums: {
    type: 'array',
    contains: {
        type: 'PositionPremiumsItem',
    },
},
        priceMatrixRules: {
    type: 'array',
    contains: {
        type: 'PositionPriceMatrixRulesItem',
    },
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