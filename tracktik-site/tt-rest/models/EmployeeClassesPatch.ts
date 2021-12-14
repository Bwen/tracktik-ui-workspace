/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';

export type EmployeeClassesPatch = {
    /**
     * Status
     */
    status?: EmployeeClassesPatch.status;
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
}

export namespace EmployeeClassesPatch {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}