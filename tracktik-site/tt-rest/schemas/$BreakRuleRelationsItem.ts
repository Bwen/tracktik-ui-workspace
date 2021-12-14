/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleRelationsItem = {
    properties: {
        breakRule: {
    type: 'one-of',
    contains: [{
    type: 'BreakRulesId',
}, {
    type: 'BreakRulesItem',
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