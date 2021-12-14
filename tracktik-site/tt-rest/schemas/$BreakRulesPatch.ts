/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRulesPatch = {
    properties: {
        name: {
    type: 'string',
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