/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Display the clock-out restrictions information
 */
export type ShiftsClockOutRestrictions = {
    /**
     * Send Late Clock-Out Reminder after (in minutes)
     */
    sendLateClockOutReminderAfter?: number;
    /**
     * Send Early Clock-Out Alert Before (in Minutes)
     */
    sendEarlyClockOutAlertBefore?: number;
}