/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeAvailabilitiesPatch = {
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
    },
} as const;