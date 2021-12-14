/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { CheckpointToursId } from './CheckpointToursId';
import type { CheckpointToursItem } from './CheckpointToursItem';
import type { DispatchSlasId } from './DispatchSlasId';
import type { DispatchSlasItem } from './DispatchSlasItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PriceTiersId } from './PriceTiersId';
import type { PriceTiersItem } from './PriceTiersItem';
import type { TaskTypesId } from './TaskTypesId';
import type { TaskTypesItem } from './TaskTypesItem';
import type { TextArea } from './TextArea';
import type { Uri } from './Uri';

export type TaskSiteInstructionsItem = {
    /**
     * Task Type: ID of the resource by default OR *on demand* JSON object of type [TaskTypes](#operation/getOneTaskTypes)
     */
    taskType?: (TaskTypesId | TaskTypesItem);
    /**
     * Site: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    site?: (AccountsId | AccountsItem);
    /**
     * Job instructions
     */
    jobInstructions?: TextArea;
    /**
     * This field is included when you include site `?include=site`
     */
    generalInstructions?: string;
    /**
     * Checkpoint Tour: ID of the resource by default OR *on demand* JSON object of type [CheckpointTours](#operation/getOneCheckpointTours)
     */
    checkPointTour?: (CheckpointToursId | CheckpointToursItem);
    /**
     * Price tier: ID of the resource by default OR *on demand* JSON object of type [PriceTiers](#operation/getOnePriceTiers)
     */
    priceTier?: (PriceTiersId | PriceTiersItem);
    /**
     * Dispatch SLA: ID of the resource by default OR *on demand* JSON object of type [DispatchSlas](#operation/getOneDispatchSlas)
     */
    dispatchSla?: (DispatchSlasId | DispatchSlasItem);
    /**
     * This field is included when you include site `?include=site` for the full object you must to add `?include=site,site.dispatchSla`
     */
    generalDispatchSla?: string;
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