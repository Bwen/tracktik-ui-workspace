/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { BreakRuleExceptionsItem } from './BreakRuleExceptionsItem';
import type { Currency } from './Currency';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Hours } from './Hours';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { ShiftNotesItem } from './ShiftNotesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkSessionsItem } from './WorkSessionsItem';

export type ShiftsItem = {
    /**
     * If the shift is active or cancelled
     */
    status?: ShiftsItem.status;
    /**
     * Shift Custom ID: *On demand*
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
     * Start timestamp in UTC: *On demand*
     */
    startsOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startsOn`: *On demand*
     */
    startTimestamp?: Integer;
    /**
     * End of the shift
     */
    endDateTime?: DateTime;
    /**
     * End timestamp in UTC: *On demand*
     */
    endsOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endsOn`: *On demand*
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
     * The employee assigned to the shift: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * The work post where the shift is scheduled: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Notes: *On demand*. List of JSON objects of type ShiftNotes
     */
    notes?: Array<ShiftNotesItem>;
    /**
     * Last Modified: *On demand*
     */
    modifiedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `modifiedOn`: *On demand*
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
     * Duration in hours: *On demand*
     */
    plannedDurationHours?: Hours;
    /**
     * Shift planned payable hours, breaks removed when they are not payable
     */
    plannedPayableHours?: Hours;
    /**
     * Shift clocked raw hours from all work sessions: *On demand*
     */
    clockedHours?: Hours;
    /**
     * Shift approved hours. Use action `approve` to set this value: *On demand*
     */
    approvedHours?: Hours;
    /**
     * Shift billable hours, breaks removed when they are not billable. Use action `approve` to set this value: *On demand*
     */
    billableHours?: Hours;
    /**
     * Shift payable hours, breaks removed when they are not payable. Use action `approve` to set this value: *On demand*
     */
    payableHours?: Hours;
    /**
     * Pay rate levels: NOT_PAYABLE, SHIFT_RATE, POSITION_RATE, SITE_USER_RATE, EMPLOYEE_RATE, SYSTEM_DEFAULT, MISSING: *On demand*
     */
    payRateLevel?: Label;
    /**
     * Pay rate for the shift. Changing this value will also change the payRateLevel to SHIFT_RATE: *On demand*
     */
    payRate?: Decimal;
    /**
     * Bill rate for the shift.: *On demand*
     */
    billRate?: Decimal;
    /**
     * Attendance Status
     */
    attendanceStatus?: ShiftsItem.attendanceStatus;
    /**
     * Work Sessions: *On demand*. List of JSON objects of type [WorkSessions](#operation/getOneWorkSessions)
     */
    workSessions?: Array<WorkSessionsItem>;
    /**
     * Overtime Hours: *On demand*
     */
    overtimeHours?: Hours;
    /**
     * Paid: *On demand*
     */
    paidAmount?: Currency;
    /**
     * Billed: *On demand*
     */
    billedAmount?: Currency;
    /**
     * Holiday Hours: *On demand*
     */
    holidayHours?: Hours;
    /**
     * Pay Code used as a label: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCodeLabel?: (PayrollCodesId | PayrollCodesItem);
    /**
     * Break Rule Exceptions: *On demand*. List of JSON objects of type [BreakRuleExceptions](#operation/getOneBreakRuleExceptions)
     */
    breakRuleExceptions?: Array<BreakRuleExceptionsItem>;
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
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ShiftsItem {

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