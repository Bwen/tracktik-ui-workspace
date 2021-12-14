/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAvailabilitiesItem = {
    properties: {
        weekDay: {
    type: 'Enum',
},
        timeFrom: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeFromIn24hFormat: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        timeTo: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeToIn24hFormat: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        available: {
    type: 'Enum',
},
        status: {
    type: 'Enum',
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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
    },
} as const;