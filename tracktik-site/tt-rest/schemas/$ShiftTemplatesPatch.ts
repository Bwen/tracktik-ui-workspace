/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplatesPatch = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        startDayIndex: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
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