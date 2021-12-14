/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventsSubscriptionLogsPost = {
    properties: {
        eventsSubscription: {
    type: 'all-of',
    contains: [{
    type: 'EventsSubscriptionsId',
}],
    isRequired: true,
},
        eventData: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
    },
} as const;