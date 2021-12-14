/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { BreakRuleExceptionsId } from './BreakRuleExceptionsId';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';
import type { ShiftNotesId } from './ShiftNotesId';

export type ShiftsPost = {
    /**
     * If the shift is active or cancelled
     */
    status: ShiftsPost.status;
    /**
     * Shift Custom ID
     */
    customId?: Label;
    /**
     * If the shift is billable or non-billable
     */
    billable: Boolean;
    /**
     * If the shift is payable or non-payable
     */
    payable: Boolean;
    /**
     * If the shift is paid time off or not
     */
    paidTimeOff: Boolean;
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
    startDateTime: DateTime;
    /**
     * End of the shift
     */
    endDateTime: DateTime;
    /**
     * The number of minuted allocated for breaks
     */
    breakInMinutes: Minutes;
    /**
     * If the shift is published and viewable by employees
     */
    published?: Boolean;
    /**
     * The employee assigned to the shift
     */
    employee: EmployeesId;
    /**
     * The work post where the shift is scheduled
     */
    position: PositionsId;
    /**
     * Notes
     */
    notes?: Array<ShiftNotesId>;
    /**
     * Pay rate for the shift. Changing this value will also change the payRateLevel to SHIFT_RATE
     */
    payRate?: Decimal;
    /**
     * Bill rate for the shift.
     */
    billRate?: Decimal;
    /**
     * Pay Code used as a label
     */
    payCodeLabel?: PayrollCodesId;
    /**
     * Break Rule Exceptions
     */
    breakRuleExceptions?: Array<BreakRuleExceptionsId>;
}

export namespace ShiftsPost {

    /**
     * If the shift is active or cancelled
     */
    export enum status {
        CANCELLED = 'CANCELLED',
        ACTIVE = 'ACTIVE',
    }


}