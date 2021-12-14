/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { DispatchSlasId } from './DispatchSlasId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type TaskSiteSettingsCollection = {
    /**
     * Site
     */
    site?: ClientsId;
    /**
     * Default site instructions for Dispatch Ttasks
     */
    defaultInstructions?: Label;
    /**
     * Sla Category
     */
    dispatchSlaCategory?: DispatchSlasId;
    /**
     * Is this site an Alarm Organization
     */
    alarmOrganization?: Boolean;
    /**
     * Banned site should not receive any services
     */
    dispatchBanned?: Boolean;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}