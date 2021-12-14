/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';
import type { ZonesId } from './ZonesId';

export type MobileRunsheetsPost = {
    /**
     * Name
     */
    name: Label;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week
     */
    dayOfWeek: MobileRunsheetsPost.dayOfWeek;
    /**
     * Time range start
     */
    rangeStartTime: Time;
    /**
     * This field was deprecated in favor of `rangeStartTime`
     */
    timeRangeStart: Time;
    /**
     * Time range end
     */
    rangeEndTime: Time;
    /**
     * This field was deprecated in favor of `rangeEndTime`
     */
    timeRangeEnd: Time;
    /**
     * Position
     */
    zonePosition: PositionsId;
    /**
     * Zone
     */
    zone: ZonesId;
    /**
     * Begin Date
     */
    beginDate?: Date;
    /**
     * End Date
     */
    endDate?: Date;
    /**
     * Status
     */
    status?: MobileRunsheetsPost.status;
}

export namespace MobileRunsheetsPost {

    /**
     * Day of week
     */
    export enum dayOfWeek {
        SUNDAY = 'SUNDAY',
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
    }

    /**
     * Status
     */
    export enum status {
        CANCELLED = 'CANCELLED',
        ACTIVE = 'ACTIVE',
    }


}