/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type TaskTypesCollection = {
    /**
     * Task Name
     */
    name?: string;
    /**
     * Can Dispatch
     */
    dispatchable?: boolean;
    /**
     * Can Schedule
     */
    schedulable?: boolean;
    /**
     * Billable
     */
    billable?: boolean;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Active
     */
    active?: boolean;
    /**
     * Report Template
     */
    reportTemplate?: ReportTemplatesId;
    /**
     * Priority
     */
    priority?: TaskTypesCollection.priority;
    /**
     * Dispatch Group
     */
    dispatchGroup?: string;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace TaskTypesCollection {

    /**
     * Priority
     */
    export enum priority {
        LOW = 'LOW',
        IMPORTANT = 'IMPORTANT',
        URGENT = 'URGENT',
    }


}