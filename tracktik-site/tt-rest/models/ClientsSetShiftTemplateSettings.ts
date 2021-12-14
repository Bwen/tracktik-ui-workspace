/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ClientsSetShiftTemplateSettings = {
    /**
     * Setup the schedule template cycle settings:
 * <ul>
 * <li>A 7 day cycle happens every week on the same day.</li>
 * <li>A 14 day cycle alternates schedule from one week to another.</li>
 * <li>A custom cycle will not happen on the same week days</li>
 * </ul>
 * 
     */
    cycleDays: number;
    /**
     * First period start date. <strong>Changing the cycle first day will clear your template.</strong>
     */
    startDate?: any;
}