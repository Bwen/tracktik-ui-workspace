/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { BreakRuleExceptionsId } from './BreakRuleExceptionsId';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';
import type { ShiftNotesId } from './ShiftNotesId';

export type ShiftsPut = {
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