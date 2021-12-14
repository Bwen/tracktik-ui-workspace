/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ShiftTemplateSettingsItem = {
    /**
     * Site: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    client?: (AccountsId | AccountsItem);
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