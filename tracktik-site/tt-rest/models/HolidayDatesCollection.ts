/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type HolidayDatesCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Holiday Date
     */
    holidayDate?: Date;
    /**
     * Holiday Recurrent
     */
    recurrent?: HolidayRecurrentsId;
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