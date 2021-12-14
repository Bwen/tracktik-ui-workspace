/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsPatch } from './HolidayGroupsPatch';
import type { HolidayRecurrentsPatch } from './HolidayRecurrentsPatch';

export type HolidayDateToClassesPatch = {
    /**
     * HolidayGroup
     */
    class?: HolidayGroupsPatch;
    /**
     * HolidayDate
     */
    date?: HolidayDatesId;
    /**
     * HolidayRecurrent
     */
    recurrent?: HolidayRecurrentsPatch;
}