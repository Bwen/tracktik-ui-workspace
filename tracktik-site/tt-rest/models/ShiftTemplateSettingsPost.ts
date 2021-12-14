/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Date } from './Date';
import type { Integer } from './Integer';

export type ShiftTemplateSettingsPost = {
    /**
     * Site
     */
    client?: AccountsId;
    /**
     * Setup the schedule template cycle settings:
 * <ul>
 * <li>A 7 day cycle happens every week on the same day.</li>
 * <li>A 14 day cycle alternates schedule from one week to another.</li>
 * <li>A custom cycle will not happen on the same week days</li>
 * </ul>
 * 
     */
    cycleDays?: Integer;
    /**
     * First period start date
     */
    startDate?: Date;
}