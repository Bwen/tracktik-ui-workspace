/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { WorkflowInstanceLogsId } from './WorkflowInstanceLogsId';
import type { WorkflowsId } from './WorkflowsId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowInstancesPost = {
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
     * Logs
     */
    logs?: Array<WorkflowInstanceLogsId>;
    /**
     * Dispatch-Task
     */
    dispatchTask?: DispatchTasksId;
}