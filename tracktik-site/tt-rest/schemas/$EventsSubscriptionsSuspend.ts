/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventsSubscriptionsSuspend = {
    properties: {
        reason: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
    },
} as const;