/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerCheckInsPut = {
    properties: {
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;