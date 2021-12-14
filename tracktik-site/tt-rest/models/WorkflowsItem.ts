/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { WorkflowStatusesItem } from './WorkflowStatusesItem';

export type WorkflowsItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    details?: Label;
    /**
     * Type of Workflow
     */
    type?: WorkflowsItem.type;
    /**
     * If the workflow is available to all regions. If not, set the workflow's region
     */
    isGlobal?: boolean;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * If the workflow is active or disabled
     */
    status?: WorkflowsItem.status;
    /**
     * The different status nodes on this workflow: *On demand*. List of JSON objects of type [WorkflowStatuses](#operation/getOneWorkflowStatuses)
     */
    statuses?: Array<WorkflowStatusesItem>;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace WorkflowsItem {

    /**
     * Type of Workflow
     */
    export enum type {
        DISPATCH = 'DISPATCH',
        EMPLOYEE = 'EMPLOYEE',
        REPORT = 'REPORT',
        ACCOUNT = 'ACCOUNT',
        CONTACT = 'CONTACT',
        SHIFT = 'SHIFT',
        WORK_SESSION = 'WORK_SESSION',
        INVOICE = 'INVOICE',
    }

    /**
     * If the workflow is active or disabled
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }


}