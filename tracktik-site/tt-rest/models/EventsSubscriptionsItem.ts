/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { EventsSubscriptionLogsItem } from './EventsSubscriptionLogsItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type EventsSubscriptionsItem = {
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
     * Failure email
     */
    failureEmail?: Email;
    /**
     * Triggered time
     */
    lastTriggeredOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `lastTriggeredOn`
     */
    lastTriggeredTime?: TimeStampNumber;
    /**
     * Logs of events fired on relation to this subscription: *On demand*. List of JSON objects of type EventsSubscriptionLogs
     */
    logs?: Array<EventsSubscriptionLogsItem>;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}