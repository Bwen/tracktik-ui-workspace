/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRuleComplianceLogsItem = {
    properties: {
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        breakRule: {
    type: 'one-of',
    contains: [{
    type: 'BreakRulesId',
}, {
    type: 'BreakRulesItem',
}],
},
        totalSecondsExpected: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        totalMinutesExpected: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        totalSecondsActual: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        totalMinutesActual: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        totalSecondsStatus: {
    type: 'Enum',
},
        totalMinutesStatus: {
    type: 'Enum',
},
        totalBreaksExpected: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        totalBreaksActual: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        totalBreaksStatus: {
    type: 'Enum',
},
        compliantCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        lateCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        earlyCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        missedCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        unscheduledCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        tooLongCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        tooShortCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealSecondsExpected: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealMinutesExpected: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        mealSecondsActual: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealMinutesActual: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        mealLateCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealEarlyCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealMissedCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealUnscheduledCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealTooLongCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealTooShortCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restSecondsExpected: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restMinutesExpected: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        restSecondsActual: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restMinutesActual: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        restLateCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restEarlyCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restMissedCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restUnscheduledCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restTooLongCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restTooShortCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        restInterruptedCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        mealInterruptedCount: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        rounded: {
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