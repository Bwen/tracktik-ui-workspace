/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type WorkflowsCollection = {
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
    type?: WorkflowsCollection.type;
    /**
     * If the workflow is available to all regions. If not, set the workflow's region
     */
    isGlobal?: boolean;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * If the workflow is active or disabled
     */
    status?: WorkflowsCollection.status;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace WorkflowsCollection {

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