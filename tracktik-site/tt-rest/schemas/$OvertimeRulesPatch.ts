/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OvertimeRulesPatch = {
    properties: {
        name: {
    type: 'string',
},
        periodLength: {
    type: 'Enum',
},
        billingRuleItems: {
    type: 'array',
    contains: {
        type: 'OvertimeRuleItemsId',
    },
},
        ruleType: {
    type: 'Enum',
},
        rules: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;