/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HolidayDatesId } from './HolidayDatesId';
import type { HolidayGroupsPut } from './HolidayGroupsPut';
import type { HolidayRecurrentsPut } from './HolidayRecurrentsPut';

export type HolidayDateToClassesPut = {
    /**
     * HolidayGroup
     */
    class?: HolidayGroupsPut;
    /**
     * HolidayDate
     */
    date?: HolidayDatesId;
    /**
     * HolidayRecurrent
     */
    recurrent?: HolidayRecurrentsPut;
}