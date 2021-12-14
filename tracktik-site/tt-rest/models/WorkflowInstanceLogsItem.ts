/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkflowInstancesId } from './WorkflowInstancesId';
import type { WorkflowInstancesItem } from './WorkflowInstancesItem';
import type { WorkflowStatusesId } from './WorkflowStatusesId';
import type { WorkflowStatusesItem } from './WorkflowStatusesItem';

export type WorkflowInstanceLogsItem = {
    /**
     * Status: ID of the resource by default OR *on demand* JSON object of type [WorkflowStatuses](#operation/getOneWorkflowStatuses)
     */
    status?: (WorkflowStatusesId | WorkflowStatusesItem);
    /**
     * User: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    user?: (EmployeesId | EmployeesItem);
    /**
     * Created On
     */
    createdOn?: TimeStampNumber;
    /**
     * Workflow Instance: ID of the resource by default OR *on demand* JSON object of type [WorkflowInstances](#operation/getOneWorkflowInstances)
     */
    workflowInstance?: (WorkflowInstancesId | WorkflowInstancesItem);
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