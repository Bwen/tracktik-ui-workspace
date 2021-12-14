/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInLogsPost = {
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
    },
} as const;