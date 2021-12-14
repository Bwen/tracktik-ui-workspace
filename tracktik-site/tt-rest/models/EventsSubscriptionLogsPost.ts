/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventsSubscriptionsId } from './EventsSubscriptionsId';
import type { JSON } from './JSON';

export type EventsSubscriptionLogsPost = {
    /**
     * Events Subscription
     */
    eventsSubscription: EventsSubscriptionsId;
    /**
     * Event information
     */
    eventData: JSON;
}