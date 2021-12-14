/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type PayrollScheduleOccurrencesCollection = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Payroll schedule settings
     */
    payrollSchedule?: PayrollSchedulesId;
    /**
     * Date at which the payroll period ends
     */
    occurrenceDate?: Date;
    /**
     * Region where the payroll schedule is defined
     */
    region?: RegionsId;
    /**
     * Region where payroll can be run
     */
    subRegionId?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}