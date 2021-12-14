/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';

export type HolidayGroupDateRelationsPut = {
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
}