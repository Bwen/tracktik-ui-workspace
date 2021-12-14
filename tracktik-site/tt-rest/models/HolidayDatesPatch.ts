/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { HolidayRecurrentsId } from './HolidayRecurrentsId';
import type { RegionsId } from './RegionsId';

export type HolidayDatesPatch = {
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
}