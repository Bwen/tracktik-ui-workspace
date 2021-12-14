/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Display the clock-in restrictions information
 */
export type ShiftsClockInRestrictions = {
    /**
     * Minutes before the shift start on which the user can do a clock-in
     */
    startGracePeriodInMinutes?: number;
    /**
     * Minutes after the shift start, to send an alert if not clocked-in
     */
    lateAlertInMinutes?: number;
    /**
     * The client should send the lat/lon information when doing the clock-in
     */
    geoFenceRestrictions?: any;
    /**
     * Allow employees to clock in through the SHIFT app
     */
    canClockInOnShiftApp?: boolean;
}