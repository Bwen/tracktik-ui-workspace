/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';
import type { PositionsId } from './PositionsId';
import type { PriceTiersId } from './PriceTiersId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TaskTypesId } from './TaskTypesId';
import type { TextArea } from './TextArea';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrencesCollection = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week start
     */
    dayOfWeekStart?: MobileScheduleOccurrencesCollection.dayOfWeekStart;
    /**
     * Day of week end
     */
    dayOfWeekEnd?: MobileScheduleOccurrencesCollection.dayOfWeekEnd;
    /**
     * Occurrence date
     */
    occurrenceDate?: Date;
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
     * Duration in minutes
     */
    durationMinutes?: Integer;
    /**
     * Begin service date
     */
    beginServiceOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `beginServiceOn`
     */
    beginServiceDate?: TimeStampNumber;
    /**
     * End service date
     */
    endServiceOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endServiceOn`
     */
    endServiceDate?: TimeStampNumber;
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
     * Date and time range start
     */
    rangeStartedDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `rangeStartedDateTime`
     */
    dateTimeRangeStart?: TimeStampDate;
    /**
     * Date and time range end
     */
    rangeEndedDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `rangeEndedDateTime`
     */
    dateTimeRangeEnd?: TimeStampDate;
    /**
     * Task type
     */
    taskType?: TaskTypesId;
    /**
     * Mobile runsheet
     */
    mobileRunsheet?: MobileRunsheetsId;
    /**
     * Client Site
     */
    client?: ClientsId;
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
     * The mobile schedule ocurrence log
     */
    mobileScheduleOccurrenceLog?: MobileScheduleOccurrenceLogsId;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace MobileScheduleOccurrencesCollection {

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