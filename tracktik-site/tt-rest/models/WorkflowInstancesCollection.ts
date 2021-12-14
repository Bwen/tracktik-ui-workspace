/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkflowsId } from './WorkflowsId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowInstancesCollection = {
    /**
     * Current Status
     */
    currentStatus?: WorkflowStatusesId;
    /**
     * Workflow
     */
    workflow?: WorkflowsId;
    /**
     * Modified On
     */
    modifiedOn?: TimeStampNumber;
    /**
     * Started On
     */
    startedOn?: TimeStampNumber;
    /**
     * Dispatch-Task
     */
    dispatchTask?: DispatchTasksId;
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