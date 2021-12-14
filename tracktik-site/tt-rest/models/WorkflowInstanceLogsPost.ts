/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { WorkflowInstancesId } from './WorkflowInstancesId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowInstanceLogsPost = {
    /**
     * Status
     */
    status?: WorkflowStatusesId;
    /**
     * User
     */
    user?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampNumber;
    /**
     * Workflow Instance
     */
    workflowInstance?: WorkflowInstancesId;
}