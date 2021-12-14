/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { ReportTemplatesItem } from './ReportTemplatesItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type TaskTypesItem = {
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
     * Report Template: ID of the resource by default OR *on demand* JSON object of type [ReportTemplates](#operation/getOneReportTemplates)
     */
    reportTemplate?: (ReportTemplatesId | ReportTemplatesItem);
    /**
     * Priority
     */
    priority?: TaskTypesItem.priority;
    /**
     * Dispatch Group
     */
    dispatchGroup?: string;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace TaskTypesItem {

    /**
     * Priority
     */
    export enum priority {
        LOW = 'LOW',
        IMPORTANT = 'IMPORTANT',
        URGENT = 'URGENT',
    }


}