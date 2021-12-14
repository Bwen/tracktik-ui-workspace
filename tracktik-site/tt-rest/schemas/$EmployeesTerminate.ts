/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeesTerminate = {
    properties: {
        date: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
    isRequired: true,
},
        reason: {
    type: 'all-of',
    contains: [{
    type: 'EmploymentTerminationReasonsId',
}],
    isRequired: true,
},
        comment: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        sendNotification: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
    },
} as const;