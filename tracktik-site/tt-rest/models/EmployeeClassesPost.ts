/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';

export type EmployeeClassesPost = {
    /**
     * Status
     */
    status?: EmployeeClassesPost.status;
    /**
     * Name
     */
    name: Label;
    /**
     * Rate
     */
    rate: Decimal;
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
}

export namespace EmployeeClassesPost {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}