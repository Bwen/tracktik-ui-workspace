/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { JSON } from './JSON';

export type EventsSubscriptionsPatch = {
    /**
     * Label
     */
    customId?: string;
    /**
     * Label
     */
    name?: string;
    /**
     * All events should be for the same resource. See different [types of events availables](/rest/v1/event-types)
     */
    events?: JSON;
    /**
     * A JSON object with two properties, a list of `fields` and a list of `include`.
 * Useful to craft a different entity payload for the webhook.
     */
    entityResponse?: JSON;
    /**
     * A JSON object with two properties, `exclusions` and `filters`.
 * The property `exclusions` is an array of context tags to be excluded. The property `filters` is an
 * array of JSON objects, each having two properties `tag` and `includeChildren`. If no context is
 * specified when creating the subscription the default one will be the region of the subscription owner
 * including the sub-regions.
     */
    contextFilters?: JSON;
    /**
     * A JSON object with a list of `filters` to exclude events that do not
 * match the conditions described on the `filter`. The `whereQL` special filter is not supporter.
     */
    userDefinedFilters?: JSON;
    /**
     * Webhook
     */
    url?: string;
    /**
     * Secret Header Key
     */
    secretHeaderName?: string;
    /**
     * Keep this `secret` confidential and use it to verify the web-hook calls.
 * How? Generate an HMAC(SHA512) of the request body using the `secret` as the key and compare
 * it with the value of the of the request header `TrackTik-Subscription-Secret`
 * or the `secretHeaderName` set when creating the subscription.
 * PHP example:
 *
 * assert(hash_hmac('sha512', $requestBody, $secret) === $requestSecretHeaderValue);
 * 
     */
    secret?: string;
    /**
     * Failure email
     */
    failureEmail?: Email;
}