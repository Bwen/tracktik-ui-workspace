/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerPhoneCallsPatch = {
    properties: {
        fromNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        toNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;