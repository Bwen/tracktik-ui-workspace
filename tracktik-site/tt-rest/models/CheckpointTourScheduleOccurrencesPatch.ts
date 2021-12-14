/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointTourSchedulesId } from './CheckpointTourSchedulesId';
import type { CheckpointToursId } from './CheckpointToursId';
import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { Integer } from './Integer';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';

export type CheckpointTourScheduleOccurrencesPatch = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Tour Schedule
     */
    tourSchedule?: CheckpointTourSchedulesId;
    /**
     * Tour
     */
    tour?: CheckpointToursId;
    /**
     * Date
     */
    tourDate?: Date;
    /**
     * This field was deprecated in favor of `tourDate`
     */
    date?: Date;
    /**
     * Time
     */
    tourTime?: Time;
    /**
     * This field was deprecated in favor of `tourTime`
     */
    time?: Time;
    /**
     * Date and Time
     */
    occurrenceDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `occurrenceDateTime`
     */
    datetime?: TimeStampDate;
    /**
     * Time Zone
     */
    timeZone?: string;
}