/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Time } from './Time';

export type EmployeeAvailabilitiesPost = {
    /**
     * Week Day
     */
    weekDay: EmployeeAvailabilitiesPost.weekDay;
    /**
     * This field was deprecated in favor of `timeFromIn24hFormat`.
     */
    timeFrom: Time;
    /**
     * Time From 24h Format
     */
    timeFromIn24hFormat: Label;
    /**
     * This field was deprecated in favor of `timeToIn24hFormat`.
     */
    timeTo: Time;
    /**
     * Time To 24h Format
     */
    timeToIn24hFormat: Label;
    /**
     * This field was deprecated in favor of `status`.
     */
    available: EmployeeAvailabilitiesPost.available;
    /**
     * Status
     */
    status: EmployeeAvailabilitiesPost.status;
}

export namespace EmployeeAvailabilitiesPost {

    /**
     * Week Day
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

    /**
     * This field was deprecated in favor of `status`.
     */
    export enum available {
        NOT_AVAILABLE = 'NOT_AVAILABLE',
        AVAILABLE = 'AVAILABLE',
        MAYBE = 'MAYBE',
    }

    /**
     * Status
     */
    export enum status {
        NOT_AVAILABLE = 'NOT_AVAILABLE',
        AVAILABLE = 'AVAILABLE',
        MAYBE = 'MAYBE',
    }


}