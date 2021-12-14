/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OvertimeRuleItemsCollection = {
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