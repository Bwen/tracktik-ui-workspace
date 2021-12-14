/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeClassesPatch = {
    properties: {
        status: {
    type: 'Enum',
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        weeklyHoursMaximum: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        weeklyHoursMinimum: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        schedulingWeight: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        schedulingPriority: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;