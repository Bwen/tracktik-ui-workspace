/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRulesAssign = {
    properties: {
        positions: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
    },
} as const;