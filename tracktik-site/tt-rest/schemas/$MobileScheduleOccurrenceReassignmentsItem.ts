/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrenceReassignmentsItem = {
    properties: {
        mobileRunsheetSession: {
    type: 'one-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
}, {
    type: 'MobileRunsheetSessionsItem',
}],
},
        mobileScheduleOccurrenceLog: {
    type: 'one-of',
    contains: [{
    type: 'MobileScheduleOccurrenceLogsId',
}, {
    type: 'MobileScheduleOccurrenceLogsItem',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;