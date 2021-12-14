/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Time } from './Time';
import type { Uri } from './Uri';

export type CheckpointTourSchedulesCollection = {
    /**
     * Tour
     */
    tour?: CheckpointToursId;
    /**
     * Scheduled Day
     */
    scheduledDayOfWeek?: CheckpointTourSchedulesCollection.scheduledDayOfWeek;
    /**
     * This field was deprecated in favor of `scheduledDayOfWeek`
     */
    weekDay?: CheckpointTourSchedulesCollection.weekDay;
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
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}

export namespace CheckpointTourSchedulesCollection {

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