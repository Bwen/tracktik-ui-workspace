/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplatesPut = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        startDayIndex: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        vacant: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        onShiftBoard: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        breakInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        positionSkills: {
    type: 'array',
    contains: {
        type: 'PositionSkillsId',
    },
},
    },
} as const;