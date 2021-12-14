/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type EmployeeClassesCollection = {
    /**
     * Status
     */
    status?: EmployeeClassesCollection.status;
    /**
     * Name
     */
    name?: Label;
    /**
     * Rate
     */
    rate?: Decimal;
    /**
     * Maximum hours per week
     */
    weeklyHoursMaximum?: Integer;
    /**
     * Minimum hours per week
     */
    weeklyHoursMinimum?: Integer;
    /**
     * This field has been deprecated in favor of `schedulingPriority`
     */
    schedulingWeight?: Integer;
    /**
     * Scheduling Priority
     */
    schedulingPriority?: Integer;
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

export namespace EmployeeClassesCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}