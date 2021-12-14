/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeClassesCollection = {
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