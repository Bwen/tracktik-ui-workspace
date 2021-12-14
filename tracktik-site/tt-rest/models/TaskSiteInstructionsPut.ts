/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { CheckpointToursId } from './CheckpointToursId';
import type { DispatchSlasId } from './DispatchSlasId';
import type { PriceTiersId } from './PriceTiersId';
import type { TaskTypesId } from './TaskTypesId';
import type { TextArea } from './TextArea';

export type TaskSiteInstructionsPut = {
    /**
     * Task Type
     */
    taskType: TaskTypesId;
    /**
     * Site
     */
    site: AccountsId;
    /**
     * Job instructions
     */
    jobInstructions?: TextArea;
    /**
     * This field is included when you include site `?include=site`
     */
    generalInstructions?: string;
    /**
     * Checkpoint Tour
     */
    checkPointTour?: CheckpointToursId;
    /**
     * Price tier
     */
    priceTier?: PriceTiersId;
    /**
     * Dispatch SLA
     */
    dispatchSla?: DispatchSlasId;
    /**
     * This field is included when you include site `?include=site` for the full object you must to add `?include=site,site.dispatchSla`
     */
    generalDispatchSla?: string;
}