/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeClassesPost = {
    properties: {
        status: {
    type: 'Enum',
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
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