/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type HolidayGroupDateRelationsCollection = {
    /**
     * Relation to Holiday Group
     */
    holidayGroup?: HolidayGroupsId;
    /**
     * Relation to Holiday Date
     */
    holidayDate?: HolidayDatesId;
    /**
     * Relation to Holiday Recurrent
     */
    holidayRecurrent?: HolidayRecurrentsId;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}