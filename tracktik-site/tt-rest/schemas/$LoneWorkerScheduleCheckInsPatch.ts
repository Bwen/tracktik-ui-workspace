/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerScheduleCheckInsPatch = {
    properties: {
        weekDay: {
    type: 'Enum',
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
    },
} as const;