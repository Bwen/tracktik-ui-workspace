/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { DispatchTasksItem } from './DispatchTasksItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkflowInstanceLogsItem } from './WorkflowInstanceLogsItem';
import type { WorkflowsId } from './WorkflowsId';
import type { WorkflowsItem } from './WorkflowsItem';
import type { WorkflowStatusesId } from './WorkflowStatusesId';
import type { WorkflowStatusesItem } from './WorkflowStatusesItem';

export type WorkflowInstancesItem = {
    /**
     * Current Status: ID of the resource by default OR *on demand* JSON object of type [WorkflowStatuses](#operation/getOneWorkflowStatuses)
     */
    currentStatus?: (WorkflowStatusesId | WorkflowStatusesItem);
    /**
     * Workflow: ID of the resource by default OR *on demand* JSON object of type [Workflows](#operation/getOneWorkflows)
     */
    workflow?: (WorkflowsId | WorkflowsItem);
    /**
     * Modified On
     */
    modifiedOn?: TimeStampNumber;
    /**
     * Started On
     */
    startedOn?: TimeStampNumber;
    /**
     * Logs: *On demand*. List of JSON objects of type [WorkflowInstanceLogs](#operation/getOneWorkflowInstanceLogs)
     */
    logs?: Array<WorkflowInstanceLogsItem>;
    /**
     * Dispatch-Task: ID of the resource by default OR *on demand* JSON object of type [DispatchTasks](#operation/getOneDispatchTasks)
     */
    dispatchTask?: (DispatchTasksId | DispatchTasksItem);
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