/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsLogTime = {
    properties: {
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
    isRequired: true,
},
    },
} as const;