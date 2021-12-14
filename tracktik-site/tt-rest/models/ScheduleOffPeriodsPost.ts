/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type ScheduleOffPeriodsPost = {
    /**
     * The start date is the date when the employee is not available
     */
    startedOn: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startOffPeriod: TimeStampNumber;
    /**
     * The return date is the date when the employee is available
     */
    endedOn: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endOffPeriod: TimeStampNumber;
    /**
     * The description of the schedule off period
     */
    description: Label;
    /**
     * Employee
     */
    employee: EmployeesId;
    /**
     * Active
     */
    active: boolean;
}