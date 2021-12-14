/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileRunsheetSessionsItem } from './MobileRunsheetSessionsItem';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileRunsheetsItem } from './MobileRunsheetsItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { ZonesId } from './ZonesId';
import type { ZonesItem } from './ZonesItem';

export type MobileRunsheetOccurrencesItem = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Runsheet Name
     */
    name?: TextArea;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week
     */
    dayOfWeek?: MobileRunsheetOccurrencesItem.dayOfWeek;
    /**
     * Date time range start
     */
    rangeStartDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `rangeStartDateTime`
     */
    dateTimeRangeStart?: TimeStampDate;
    /**
     * Date time range end
     */
    rangeEndDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `rangeEndDateTime`
     */
    dateTimeRangeEnd?: TimeStampDate;
    /**
     * Occurrence date
     */
    occurrenceDate?: Date;
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    zonePosition?: (PositionsId | PositionsItem);
    /**
     * Zone: ID of the resource by default OR *on demand* JSON object of type [Zones](#operation/getOneZones)
     */
    zone?: (ZonesId | ZonesItem);
    /**
     * Mobile Runsheet: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheets](#operation/getOneMobileRunsheets)
     */
    mobileRunsheet?: (MobileRunsheetsId | MobileRunsheetsItem);
    /**
     * Mobile Runsheet Session: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheetSessions](#operation/getOneMobileRunsheetSessions)
     */
    session?: (MobileRunsheetSessionsId | MobileRunsheetSessionsItem);
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

export namespace MobileRunsheetOccurrencesItem {

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


}