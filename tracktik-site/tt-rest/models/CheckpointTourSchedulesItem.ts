/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { CheckpointToursItem } from './CheckpointToursItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Time } from './Time';
import type { Uri } from './Uri';

export type CheckpointTourSchedulesItem = {
    /**
     * Tour: ID of the resource by default OR *on demand* JSON object of type [CheckpointTours](#operation/getOneCheckpointTours)
     */
    tour?: (CheckpointToursId | CheckpointToursItem);
    /**
     * Scheduled Day
     */
    scheduledDayOfWeek?: CheckpointTourSchedulesItem.scheduledDayOfWeek;
    /**
     * This field was deprecated in favor of `scheduledDayOfWeek`
     */
    weekDay?: CheckpointTourSchedulesItem.weekDay;
    /**
     * Scheduled Time
     */
    scheduledTime?: Time;
    /**
     * This field was deprecated in favor of `scheduledTime`
     */
    startTime?: Time;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}

export namespace CheckpointTourSchedulesItem {

    /**
     * Scheduled Day
     */
    export enum scheduledDayOfWeek {
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
        SUNDAY = 'SUNDAY',
    }

    /**
     * This field was deprecated in favor of `scheduledDayOfWeek`
     */
    export enum weekDay {
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
        SUNDAY = 'SUNDAY',
    }


}