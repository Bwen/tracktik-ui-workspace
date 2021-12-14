/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleRelationsPatch = {
    properties: {
        breakRule: {
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
},
        relation: {
    type: 'Enum',
},
        relationId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;