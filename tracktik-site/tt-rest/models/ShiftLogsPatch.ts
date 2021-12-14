/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type ShiftLogsPatch = {
    /**
     * Type of change
     */
    changeType?: ShiftLogsPatch.changeType;
    /**
     * This field was deprecated in favor of `shift`
     */
    shiftId?: Integer;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * The employee assigned to the shift
     */
    employee?: EmployeesId;
    /**
     * The user who has changed the shift
     */
    createdBy?: EmployeesId;
    /**
     * Timestamp when the user changed the shift
     */
    createdOn?: TimeStampNumber;
    /**
     * Note
     */
    note?: Label;
    /**
     * Shift Details
     */
    shiftDetails?: Label;
    /**
     * Active
     */
    isValid?: Boolean;
}

export namespace ShiftLogsPatch {

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