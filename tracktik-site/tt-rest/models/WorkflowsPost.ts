/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { WorkflowStatusesId } from './WorkflowStatusesId';

export type WorkflowsPost = {
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
    type: WorkflowsPost.type;
    /**
     * If the workflow is available to all regions. If not, set the workflow's region
     */
    isGlobal: boolean;
    /**
     * Region
     */
    region: RegionsId;
    /**
     * The different status nodes on this workflow
     */
    statuses?: Array<WorkflowStatusesId>;
}

export namespace WorkflowsPost {

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


}