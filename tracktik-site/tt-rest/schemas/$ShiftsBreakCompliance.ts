/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsBreakCompliance = {
    properties: {
        breakGracePeriods: {
    properties: {
        gracePeriodStart: {
    type: 'number',
},
        gracePeriodEnd: {
    type: 'number',
},
        extraBreakMinutesTolerance: {
    type: 'number',
},
    },
},
        breakRuleConditions: {
    type: 'array',
    contains: {
        type: 'BreakRuleConditionsItem',
    },
},
        computedSessions: {
    properties: {
        clockIn: {
    properties: {
        expected: {
    type: 'string',
},
        actual: {
    type: 'string',
},
    },
},
        clockOut: {
    properties: {
        expected: {
    type: 'string',
},
        actual: {
    type: 'string',
},
    },
},
        mealBreak: {
    properties: {
        expectedInMinutes: {
    type: 'number',
},
        actualInMinutes: {
    type: 'number',
},
        notUsedInMinutes: {
    type: 'number',
},
        extraUsedInMinutes: {
    type: 'number',
},
    },
},
        restBreak: {
    properties: {
        expectedInMinutes: {
    type: 'number',
},
        actualInMinutes: {
    type: 'number',
},
        notUsedInMinutes: {
    type: 'number',
},
        extraUsedInMinutes: {
    type: 'number',
},
    },
},
    },
},
        breakManagementEnableFeature: {
    type: 'boolean',
},
        breakExceptions: {
    properties: {
    },
},
        payBreaks: {
    type: 'string',
},
    },
} as const;