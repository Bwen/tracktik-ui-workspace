/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointTourSchedulesId } from './CheckpointTourSchedulesId';
import type { CheckpointTourSchedulesItem } from './CheckpointTourSchedulesItem';
import type { CheckpointToursId } from './CheckpointToursId';
import type { CheckpointToursItem } from './CheckpointToursItem';
import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointTourScheduleOccurrencesItem = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Tour Schedule: ID of the resource by default OR *on demand* JSON object of type [CheckpointTourSchedules](#operation/getOneCheckpointTourSchedules)
     */
    tourSchedule?: (CheckpointTourSchedulesId | CheckpointTourSchedulesItem);
    /**
     * Tour: ID of the resource by default OR *on demand* JSON object of type [CheckpointTours](#operation/getOneCheckpointTours)
     */
    tour?: (CheckpointToursId | CheckpointToursItem);
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Time Zone
     */
    timeZone?: string;
}