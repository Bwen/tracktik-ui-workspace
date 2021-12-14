/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerScheduleCheckInsPut = {
    properties: {
        weekDay: {
    type: 'Enum',
    isRequired: true,
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
    },
} as const;