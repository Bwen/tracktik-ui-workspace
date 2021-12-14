/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsReplace = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        acknowledge: {
    type: 'boolean',
},
        notify: {
    type: 'boolean',
},
    },
} as const;