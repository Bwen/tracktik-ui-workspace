/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAvailabilitiesPost = {
    properties: {
        weekDay: {
    type: 'Enum',
    isRequired: true,
},
        timeFrom: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        timeFromIn24hFormat: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        timeTo: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        timeToIn24hFormat: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        available: {
    type: 'Enum',
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;