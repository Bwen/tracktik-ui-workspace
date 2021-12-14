/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInLogsItem = {
    properties: {
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        checkInMethod: {
    type: 'Enum',
},
        number: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        user: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        call: {
    type: 'one-of',
    contains: [{
    type: 'LoneWorkerPhoneCallsId',
}, {
    type: 'LoneWorkerPhoneCallsItem',
}],
},
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        loneWorkerCheckIn: {
    type: 'one-of',
    contains: [{
    type: 'LoneWorkerCheckInsId',
}, {
    type: 'LoneWorkerCheckInsItem',
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