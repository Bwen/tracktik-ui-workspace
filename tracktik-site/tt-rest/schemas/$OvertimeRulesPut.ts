/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OvertimeRulesPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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