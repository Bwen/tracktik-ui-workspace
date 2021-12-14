/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { RegionsId } from './RegionsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PayrollPayrunsCollection = {
    /**
     * Payroll Schedule
     */
    payrollSchedule?: PayrollSchedulesId;
    /**
     * Occurence Date
     */
    occurrenceDate?: Date;
    /**
     * Start date for the current payrun
     */
    occurrenceStartDate?: string;
    /**
     * End date for the current payrun
     */
    occurrenceEndDate?: string;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Status
     */
    status?: PayrollPayrunsCollection.status;
    /**
     * If the payrun is processed or not.
     */
    isProcessed?: Boolean;
    /**
     * Number of Employees
     */
    countEmployees?: Integer;
    /**
     * Total Hours
     */
    totalHours?: Currency;
    /**
     * Total Cost
     */
    totalCost?: Currency;
    /**
     * Overtime Cost
     */
    totalOvertimeCost?: Currency;
    /**
     * Overtime Hours
     */
    totalOvertimeHours?: Currency;
    /**
     * Total Holiday Cost
     */
    totalHolidayCost?: Currency;
    /**
     * Holiday Hours
     */
    totalHolidayHours?: Currency;
    /**
     * Approved By
     */
    approvedBy?: EmployeesId;
    /**
     * Approved On
     */
    approvedOn?: TimeStampNumber;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace PayrollPayrunsCollection {

    /**
     * Status
     */
    export enum status {
        UNPROCESSED = 'UNPROCESSED',
        PREPROCESSED = 'PREPROCESSED',
        PROCESSED = 'PROCESSED',
        REVIEWED = 'REVIEWED',
        DOWNLOADED = 'DOWNLOADED',
        PROCESSING = 'PROCESSING',
    }


}