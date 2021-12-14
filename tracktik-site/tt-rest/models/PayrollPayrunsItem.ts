/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollPayrunItemsItem } from './PayrollPayrunItemsItem';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { PayrollSchedulesItem } from './PayrollSchedulesItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PayrollPayrunsItem = {
    /**
     * Payroll Schedule: ID of the resource by default OR *on demand* JSON object of type [PayrollSchedules](#operation/getOnePayrollSchedules)
     */
    payrollSchedule?: (PayrollSchedulesId | PayrollSchedulesItem);
    /**
     * Occurence Date
     */
    occurrenceDate?: Date;
    /**
     * Start date for the current payrun: *On demand*
     */
    occurrenceStartDate?: string;
    /**
     * End date for the current payrun: *On demand*
     */
    occurrenceEndDate?: string;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Status
     */
    status?: PayrollPayrunsItem.status;
    /**
     * If the payrun is processed or not.
     */
    isProcessed?: Boolean;
    /**
     * Number of Employees: *On demand*
     */
    countEmployees?: Integer;
    /**
     * Total Hours: *On demand*
     */
    totalHours?: Currency;
    /**
     * Total Cost: *On demand*
     */
    totalCost?: Currency;
    /**
     * Overtime Cost: *On demand*
     */
    totalOvertimeCost?: Currency;
    /**
     * Overtime Hours: *On demand*
     */
    totalOvertimeHours?: Currency;
    /**
     * Total Holiday Cost: *On demand*
     */
    totalHolidayCost?: Currency;
    /**
     * Holiday Hours: *On demand*
     */
    totalHolidayHours?: Currency;
    /**
     * Approved By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    approvedBy?: (EmployeesId | EmployeesItem);
    /**
     * Approved On
     */
    approvedOn?: TimeStampNumber;
    /**
     * Items: *On demand*. List of JSON objects of type [PayrollPayrunItems](#operation/getOnePayrollPayrunItems)
     */
    items?: Array<PayrollPayrunItemsItem>;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace PayrollPayrunsItem {

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