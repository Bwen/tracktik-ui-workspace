/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { DispatchSlasId } from './DispatchSlasId';
import type { DispatchSlasItem } from './DispatchSlasItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TaskSiteInstructionsId } from './TaskSiteInstructionsId';
import type { TaskSiteInstructionsItem } from './TaskSiteInstructionsItem';
import type { Uri } from './Uri';

export type TaskSiteSettingsItem = {
    /**
     * Site: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    site?: (ClientsId | ClientsItem);
    /**
     * Default site instructions for Dispatch Ttasks
     */
    defaultInstructions?: Label;
    /**
     * Sla Category: ID of the resource by default OR *on demand* JSON object of type [DispatchSlas](#operation/getOneDispatchSlas)
     */
    dispatchSlaCategory?: (DispatchSlasId | DispatchSlasItem);
    /**
     * Is this site an Alarm Organization
     */
    alarmOrganization?: Boolean;
    /**
     * Banned site should not receive any services
     */
    dispatchBanned?: Boolean;
    /**
     * Task Instructions: *On demand*. List of JSON objects of type [TaskSiteInstructions](#operation/getOneTaskSiteInstructions)
     */
    taskInstructions?: (TaskSiteInstructionsId | TaskSiteInstructionsItem);
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
}