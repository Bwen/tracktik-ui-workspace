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

export type HolidayDateToClassesItem = {
    /**
     * HolidayGroup: ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    class?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * HolidayDate: ID of the resource by default OR *on demand* JSON object of type HolidayDates
     */
    date?: (HolidayDatesId | HolidayDatesItem);
    /**
     * HolidayRecurrent: ID of the resource by default OR *on demand* JSON object of type HolidayRecurrents
     */
    recurrent?: (HolidayRecurrentsId | HolidayRecurrentsItem);
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