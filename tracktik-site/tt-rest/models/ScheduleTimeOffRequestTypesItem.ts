/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ScheduleTimeOffRequestTypesItem = {
    /**
     * The name of the type
     */
    name?: Label;
    /**
     * The payroll code of the type
     */
    payrollCode?: Label;
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
}