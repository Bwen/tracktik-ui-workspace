/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkflowInstancesId } from './WorkflowInstancesId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowInstanceLogsCollection = {
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