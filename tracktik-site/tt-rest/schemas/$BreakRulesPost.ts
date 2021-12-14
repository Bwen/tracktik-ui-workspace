/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRulesPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        status: {
    type: 'Enum',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        effectiveDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        conditions: {
    type: 'array',
    contains: {
        type: 'BreakRuleConditionsId',
    },
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsId',
    },
},
    },
} as const;