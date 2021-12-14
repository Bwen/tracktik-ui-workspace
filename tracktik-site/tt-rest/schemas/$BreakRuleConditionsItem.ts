/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleConditionsItem = {
    properties: {
        breakRule: {
    type: 'one-of',
    contains: [{
    type: 'BreakRulesId',
}, {
    type: 'BreakRulesItem',
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;