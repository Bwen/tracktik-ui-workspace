/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { PositionsId } from './PositionsId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { ZonesId } from './ZonesId';

export type MobileRunsheetOccurrencesPut = {
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
    dayOfWeek?: MobileRunsheetOccurrencesPut.dayOfWeek;
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
     * Position
     */
    zonePosition?: PositionsId;
    /**
     * Zone
     */
    zone: ZonesId;
    /**
     * Mobile Runsheet
     */
    mobileRunsheet?: MobileRunsheetsId;
    /**
     * Mobile Runsheet Session
     */
    session?: MobileRunsheetSessionsId;
}

export namespace MobileRunsheetOccurrencesPut {

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