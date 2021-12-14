/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsPost } from './HolidayGroupsPost';
import type { HolidayRecurrentsPost } from './HolidayRecurrentsPost';

export type HolidayDateToClassesPost = {
    /**
     * HolidayGroup
     */
    class?: HolidayGroupsPost;
    /**
     * HolidayDate
     */
    date?: HolidayDatesId;
    /**
     * HolidayRecurrent
     */
    recurrent?: HolidayRecurrentsPost;
}