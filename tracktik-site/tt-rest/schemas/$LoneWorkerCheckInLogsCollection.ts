/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInLogsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        call: {
    type: 'all-of',
    contains: [{
    type: 'LoneWorkerPhoneCallsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        loneWorkerCheckIn: {
    type: 'all-of',
    contains: [{
    type: 'LoneWorkerCheckInsId',
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