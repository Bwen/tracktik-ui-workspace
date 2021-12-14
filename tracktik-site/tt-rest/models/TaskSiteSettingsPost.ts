/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { DispatchSlasId } from './DispatchSlasId';
import type { Label } from './Label';
import type { TaskSiteInstructionsId } from './TaskSiteInstructionsId';

export type TaskSiteSettingsPost = {
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
     * Task Instructions
     */
    taskInstructions?: TaskSiteInstructionsId;
}