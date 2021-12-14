/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleConditionsPost = {
    properties: {
        breakRule: {
    type: 'all-of',
    contains: [{
    type: 'BreakRulesId',
}],
},
        type: {
    type: 'Enum',
},
        duration: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        offsetType: {
    type: 'Enum',
},
        offsetStart: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        offsetEnd: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        hasReminder: {
    type: 'Enum',
},
        reminderMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        status: {
    type: 'Enum',
},
        requiresAcknowledgement: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;