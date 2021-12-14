/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { Time } from './Time';

export type CheckpointTourSchedulesPut = {
    /**
     * Tour
     */
    tour: CheckpointToursId;
    /**
     * Scheduled Day
     */
    scheduledDayOfWeek: CheckpointTourSchedulesPut.scheduledDayOfWeek;
    /**
     * This field was deprecated in favor of `scheduledDayOfWeek`
     */
    weekDay: CheckpointTourSchedulesPut.weekDay;
    /**
     * Scheduled Time
     */
    scheduledTime: Time;
    /**
     * This field was deprecated in favor of `scheduledTime`
     */
    startTime: Time;
}

export namespace CheckpointTourSchedulesPut {

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