/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileScheduleOccurrenceReassignmentsPut = {
    properties: {
        mobileRunsheetSession: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
}],
},
        mobileScheduleOccurrenceLog: {
    type: 'all-of',
    contains: [{
    type: 'MobileScheduleOccurrenceLogsId',
}],
},
    },
} as const;