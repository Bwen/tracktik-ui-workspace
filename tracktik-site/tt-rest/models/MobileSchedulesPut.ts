/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { PositionsId } from './PositionsId';
import type { PriceTiersId } from './PriceTiersId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TaskTypesId } from './TaskTypesId';
import type { TextArea } from './TextArea';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';

export type MobileSchedulesPut = {
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week start
     */
    dayOfWeekStart: MobileSchedulesPut.dayOfWeekStart;
    /**
     * Day of week end
     */
    dayOfWeekEnd?: MobileSchedulesPut.dayOfWeekEnd;
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
    rangeEndTime?: Time;
    /**
     * This field was deprecated in favor of `rangeEndTime`
     */
    timeRangeEnd?: Time;
    /**
     * Duration in minutes
     */
    durationMinutes: Integer;
    /**
     * Begin service date
     */
    beginServiceOn: TimeStampDate;
    /**
     * This field was deprecated in favor of `beginServiceOn`
     */
    beginServiceDate: TimeStampDate;
    /**
     * End service date
     */
    endServiceOn?: TimeStampDate;
    /**
     * This field was deprecated in favor of `endServiceOn`
     */
    endServiceDate?: TimeStampDate;
    /**
     * Description
     */
    description?: TextArea;
    /**
     * Details
     */
    details?: TextArea;
    /**
     * Mobile runsheet sort order
     */
    mobileRunsheetSortOrder?: Integer;
    /**
     * Task type
     */
    taskType?: TaskTypesId;
    /**
     * Mobile runsheet
     */
    mobileRunsheet?: MobileRunsheetsId;
    /**
     * Client
     */
    client: ClientsId;
    /**
     * Price tier
     */
    priceTier?: PriceTiersId;
    /**
     * Position
     */
    zonePosition?: PositionsId;
    /**
     * Report template
     */
    reportTemplate?: ReportTemplatesId;
    /**
     * Is Adhoc
     */
    isAdhoc?: Boolean;
    /**
     * Adhoc Selectable
     */
    adhocSelectable?: Boolean;
}

export namespace MobileSchedulesPut {

    /**
     * Day of week start
     */
    export enum dayOfWeekStart {
        SUNDAY = 'SUNDAY',
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
    }

    /**
     * Day of week end
     */
    export enum dayOfWeekEnd {
        SUNDAY = 'SUNDAY',
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
    }


}