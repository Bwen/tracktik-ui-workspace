/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayDatesItem } from './HolidayDatesItem';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';
import type { HolidayRecurrentsItem } from './HolidayRecurrentsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type HolidayGroupDateRelationsItem = {
    /**
     * Relation to Holiday Group: ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    holidayGroup?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * Relation to Holiday Date: ID of the resource by default OR *on demand* JSON object of type HolidayDates
     */
    holidayDate?: (HolidayDatesId | HolidayDatesItem);
    /**
     * Relation to Holiday Recurrent: ID of the resource by default OR *on demand* JSON object of type HolidayRecurrents
     */
    holidayRecurrent?: (HolidayRecurrentsId | HolidayRecurrentsItem);
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