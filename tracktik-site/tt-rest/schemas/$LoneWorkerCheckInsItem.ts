/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        loneWorkerCheckInLog: {
    type: 'one-of',
    contains: [{
    type: 'LoneWorkerCheckInLogsId',
}, {
    type: 'LoneWorkerCheckInLogsItem',
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