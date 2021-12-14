/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { PayrollSchedulesItem } from './PayrollSchedulesItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type PayrollScheduleOccurrencesItem = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Payroll schedule settings: ID of the resource by default OR *on demand* JSON object of type [PayrollSchedules](#operation/getOnePayrollSchedules)
     */
    payrollSchedule?: (PayrollSchedulesId | PayrollSchedulesItem);
    /**
     * Date at which the payroll period ends
     */
    occurrenceDate?: Date;
    /**
     * Region where the payroll schedule is defined: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Region where payroll can be run
     */
    subRegionId?: Integer;
    /**
     * Eligible employees for the payroll occurrence: *On demand*. List of JSON objects of type [Employees](#operation/getOneEmployees)
     */
    employees?: Array<EmployeesItem>;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}