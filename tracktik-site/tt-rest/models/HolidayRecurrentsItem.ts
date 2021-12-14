/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesItem } from './HolidayDatesItem';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type HolidayRecurrentsItem = {
    /**
     * Holiday Name
     */
    label?: string;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Code
     */
    code?: string;
    /**
     * Holiday dates: *On demand*. List of JSON objects of type HolidayDates
     */
    dates?: Array<HolidayDatesItem>;
    /**
     * Holiday groups: *On demand*. List of JSON objects of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    groups?: Array<HolidayGroupsItem>;
    /**
     * Next occurrence: *On demand*
     */
    nextOccurrence?: Label;
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