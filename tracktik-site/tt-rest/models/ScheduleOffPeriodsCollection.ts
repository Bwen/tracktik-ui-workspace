/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ScheduleOffPeriodsCollection = {
    /**
     * The start date is the date when the employee is not available
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startOffPeriod?: TimeStampNumber;
    /**
     * The return date is the date when the employee is available
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endOffPeriod?: TimeStampNumber;
    /**
     * The description of the schedule off period
     */
    description?: Label;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Active
     */
    active?: boolean;
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
}