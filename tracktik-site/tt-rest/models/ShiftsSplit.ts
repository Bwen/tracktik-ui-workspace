/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Time } from './Time';

export type ShiftsSplit = {
    /**
     * Time to split the shift
     */
    splitTime: Time;
    /**
     * The user that will work the first period
     */
    firstPeriodUser?: EmployeesId;
    /**
     * The number of minutes for breaks
     */
    firstPeriodBreakMinutes?: number;
    /**
     * The user that will work the lasts period
     */
    lastPeriodUser?: EmployeesId;
    /**
     * The number of minutes for breaks
     */
    lastPeriodBreakMinutes?: number;
}