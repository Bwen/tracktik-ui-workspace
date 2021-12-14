/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsEndBreak = {
    properties: {
        endMethod: {
    type: 'Enum',
    isRequired: true,
},
        condition: {
    type: 'all-of',
    contains: [{
    type: 'BreakRuleConditionsId',
}],
},
        exceptionType: {
    type: 'Enum',
},
        reasonType: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;