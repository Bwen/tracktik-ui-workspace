/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';
import type { Uri } from './Uri';
import type { ZonesId } from './ZonesId';

export type MobileRunsheetsCollection = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week
     */
    dayOfWeek?: MobileRunsheetsCollection.dayOfWeek;
    /**
     * Time range start
     */
    rangeStartTime?: Time;
    /**
     * This field was deprecated in favor of `rangeStartTime`
     */
    timeRangeStart?: Time;
    /**
     * Time range end
     */
    rangeEndTime?: Time;
    /**
     * This field was deprecated in favor of `rangeEndTime`
     */
    timeRangeEnd?: Time;
    /**
     * Position
     */
    zonePosition?: PositionsId;
    /**
     * Zone
     */
    zone?: ZonesId;
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
    status?: MobileRunsheetsCollection.status;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}

export namespace MobileRunsheetsCollection {

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