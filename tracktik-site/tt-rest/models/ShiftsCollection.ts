/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Currency } from './Currency';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Hours } from './Hours';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftsCollection = {
    /**
     * If the shift is active or cancelled
     */
    status?: ShiftsCollection.status;
    /**
     * Shift Custom ID
     */
    customId?: Label;
    /**
     * If the shift is billable or non-billable
     */
    billable?: Boolean;
    /**
     * If the shift is payable or non-payable
     */
    payable?: Boolean;
    /**
     * If the shift is paid time off or not
     */
    paidTimeOff?: Boolean;
    /**
     * If the shift is vacant
     */
    vacant?: Boolean;
    /**
     * If the shift is available on Open Shifts
     */
    onShiftBoard?: boolean;
    /**
     * Start of the shift
     */
    startDateTime?: DateTime;
    /**
     * Start timestamp in UTC
     */
    startsOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startsOn`
     */
    startTimestamp?: Integer;
    /**
     * End of the shift
     */
    endDateTime?: DateTime;
    /**
     * End timestamp in UTC
     */
    endsOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endsOn`
     */
    endTimestamp?: Integer;
    /**
     * The number of minuted allocated for breaks
     */
    breakInMinutes?: Minutes;
    /**
     * If the shift is published and viewable by employees
     */
    published?: Boolean;
    /**
     * The employee assigned to the shift
     */
    employee?: EmployeesId;
    /**
     * The work post where the shift is scheduled
     */
    position?: PositionsId;
    /**
     * Last Modified
     */
    modifiedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `modifiedOn`
     */
    lastModified?: TimeStampNumber;
    /**
     * Last version of the shift has been sent by the employee
     */
    notified?: boolean;
    /**
     * Last version of the shift has been acknowledged by the employee
     */
    acknowledged?: boolean;
    /**
     * Last version has been viewed by the shift's owner
     */
    viewed?: boolean;
    /**
     * Shift is locked and cannot be modified
     */
    locked?: boolean;
    /**
     * Duration in hours
     */
    plannedDurationHours?: Hours;
    /**
     * Shift planned payable hours, breaks removed when they are not payable
     */
    plannedPayableHours?: Hours;
    /**
     * Shift clocked raw hours from all work sessions
     */
    clockedHours?: Hours;
    /**
     * Shift approved hours. Use action `approve` to set this value
     */
    approvedHours?: Hours;
    /**
     * Shift billable hours, breaks removed when they are not billable. Use action `approve` to set this value
     */
    billableHours?: Hours;
    /**
     * Shift payable hours, breaks removed when they are not payable. Use action `approve` to set this value
     */
    payableHours?: Hours;
    /**
     * Pay rate levels: NOT_PAYABLE, SHIFT_RATE, POSITION_RATE, SITE_USER_RATE, EMPLOYEE_RATE, SYSTEM_DEFAULT, MISSING
     */
    payRateLevel?: Label;
    /**
     * Pay rate for the shift. Changing this value will also change the payRateLevel to SHIFT_RATE
     */
    payRate?: Decimal;
    /**
     * Bill rate for the shift.
     */
    billRate?: Decimal;
    /**
     * Attendance Status
     */
    attendanceStatus?: ShiftsCollection.attendanceStatus;
    /**
     * Overtime Hours
     */
    overtimeHours?: Hours;
    /**
     * Paid
     */
    paidAmount?: Currency;
    /**
     * Billed
     */
    billedAmount?: Currency;
    /**
     * Holiday Hours
     */
    holidayHours?: Hours;
    /**
     * Pay Code used as a label
     */
    payCodeLabel?: PayrollCodesId;
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
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ShiftsCollection {

    /**
     * If the shift is active or cancelled
     */
    export enum status {
        CANCELLED = 'CANCELLED',
        ACTIVE = 'ACTIVE',
    }

    /**
     * Attendance Status
     */
    export enum attendanceStatus {
        SCHEDULED = 'SCHEDULED',
        LATE = 'LATE',
        IN_PROGRESS = 'IN_PROGRESS',
        ON_BREAK = 'ON_BREAK',
        MISSED = 'MISSED',
        COMPLETED = 'COMPLETED',
        OVER_CLOCK = 'OVER_CLOCK',
        EARLY_CLOCK_OUT = 'EARLY_CLOCK_OUT',
        PTO = 'PTO',
    }


}