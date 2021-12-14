/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsCollection } from './HolidayGroupsCollection';
import type { HolidayRecurrentsCollection } from './HolidayRecurrentsCollection';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type HolidayDateToClassesCollection = {
    /**
     * HolidayGroup
     */
    class?: HolidayGroupsCollection;
    /**
     * HolidayDate
     */
    date?: HolidayDatesId;
    /**
     * HolidayRecurrent
     */
    recurrent?: HolidayRecurrentsCollection;
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