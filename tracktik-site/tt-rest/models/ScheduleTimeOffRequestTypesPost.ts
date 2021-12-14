/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';

export type ScheduleTimeOffRequestTypesPost = {
    /**
     * The name of the type
     */
    name: Label;
    /**
     * The payroll code of the type
     */
    payrollCode: Label;
    /**
     * The paid time-off of the type
     */
    paidTimeOff?: Integer;
    /**
     * The salary is a contractual
     */
    hourly?: Integer;
    /**
     * The salary is a permanent
     */
    salary?: Integer;
}