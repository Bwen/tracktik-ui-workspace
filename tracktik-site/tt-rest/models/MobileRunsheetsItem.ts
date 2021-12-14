/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { Time } from './Time';
import type { Uri } from './Uri';
import type { ZonesId } from './ZonesId';
import type { ZonesItem } from './ZonesItem';

export type MobileRunsheetsItem = {
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
    dayOfWeek?: MobileRunsheetsItem.dayOfWeek;
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
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    zonePosition?: (PositionsId | PositionsItem);
    /**
     * Zone: ID of the resource by default OR *on demand* JSON object of type [Zones](#operation/getOneZones)
     */
    zone?: (ZonesId | ZonesItem);
    /**
     * Begin Date
     */
    beginDate?: Date;
    /**
     * End Date
     */
    endDate?: Date;
    /**
     * Status: *On demand*
     */
    status?: MobileRunsheetsItem.status;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}

export namespace MobileRunsheetsItem {

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
     * Status: *On demand*
     */
    export enum status {
        CANCELLED = 'CANCELLED',
        ACTIVE = 'ACTIVE',
    }


}