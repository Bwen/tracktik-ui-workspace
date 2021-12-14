/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowsPatch = {
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
    type?: WorkflowsPatch.type;
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
    status?: WorkflowsPatch.status;
    /**
     * The different status nodes on this workflow
     */
    statuses?: Array<WorkflowStatusesId>;
}

export namespace WorkflowsPatch {

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