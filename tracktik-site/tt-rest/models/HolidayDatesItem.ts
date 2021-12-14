/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';
import type { HolidayRecurrentsItem } from './HolidayRecurrentsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type HolidayDatesItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Holiday Date
     */
    holidayDate?: Date;
    /**
     * Holiday Recurrent: ID of the resource by default OR *on demand* JSON object of type HolidayRecurrents
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