/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleConditionsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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