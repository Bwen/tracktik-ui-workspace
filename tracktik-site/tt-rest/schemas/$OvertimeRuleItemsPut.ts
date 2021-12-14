/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OvertimeRuleItemsPut = {
    properties: {
        ruleType: {
    type: 'Enum',
},
        rateType: {
    type: 'Enum',
},
        threshold: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        rateMultiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        rateAmount: {
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
    },
} as const;