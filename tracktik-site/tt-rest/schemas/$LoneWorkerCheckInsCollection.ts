/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInsCollection = {
    properties: {
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        status: {
    type: 'Enum',
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        loneWorkerCheckInLog: {
    type: 'all-of',
    contains: [{
    type: 'LoneWorkerCheckInLogsCollection',
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