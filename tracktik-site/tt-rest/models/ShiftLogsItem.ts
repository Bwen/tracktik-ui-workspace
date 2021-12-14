/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftLogsItem = {
    /**
     * Type of change
     */
    changeType?: ShiftLogsItem.changeType;
    /**
     * This field was deprecated in favor of `shift`
     */
    shiftId?: Integer;
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * The employee assigned to the shift: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * The user who has changed the shift: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Timestamp when the user changed the shift
     */
    createdOn?: TimeStampNumber;
    /**
     * Note
     */
    note?: Label;
    /**
     * Shift Details: *On demand*
     */
    shiftDetails?: Label;
    /**
     * Active
     */
    isValid?: Boolean;
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

export namespace ShiftLogsItem {

    /**
     * Type of change
     */
    export enum changeType {
        REMOVED = 'REMOVED',
        ADDED = 'ADDED',
        TIME = 'TIME',
        CANCELLED = 'CANCELLED',
    }


}