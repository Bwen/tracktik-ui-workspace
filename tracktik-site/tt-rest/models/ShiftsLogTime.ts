/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';

export type ShiftsLogTime = {
    /**
     * Start Time
     */
    startTime: TimeStampDate;
    /**
     * End Time
     */
    endTime: TimeStampNumber;
}