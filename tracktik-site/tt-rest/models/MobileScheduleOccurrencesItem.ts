/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { Date } from './Date';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileRunsheetsItem } from './MobileRunsheetsItem';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';
import type { MobileScheduleOccurrenceLogsItem } from './MobileScheduleOccurrenceLogsItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { PriceTiersId } from './PriceTiersId';
import type { PriceTiersItem } from './PriceTiersItem';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { ReportTemplatesItem } from './ReportTemplatesItem';
import type { TaskTypesId } from './TaskTypesId';
import type { TaskTypesItem } from './TaskTypesItem';
import type { TextArea } from './TextArea';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrencesItem = {
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
    dayOfWeekStart?: MobileScheduleOccurrencesItem.dayOfWeekStart;
    /**
     * Day of week end
     */
    dayOfWeekEnd?: MobileScheduleOccurrencesItem.dayOfWeekEnd;
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
     * Mobile runsheet sort order: *On demand*
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
     * Task type: ID of the resource by default OR *on demand* JSON object of type [TaskTypes](#operation/getOneTaskTypes)
     */
    taskType?: (TaskTypesId | TaskTypesItem);
    /**
     * Mobile runsheet: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheets](#operation/getOneMobileRunsheets)
     */
    mobileRunsheet?: (MobileRunsheetsId | MobileRunsheetsItem);
    /**
     * Client Site: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    client?: (ClientsId | ClientsItem);
    /**
     * Price tier: ID of the resource by default OR *on demand* JSON object of type [PriceTiers](#operation/getOnePriceTiers)
     */
    priceTier?: (PriceTiersId | PriceTiersItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    zonePosition?: (PositionsId | PositionsItem);
    /**
     * Report template: ID of the resource by default OR *on demand* JSON object of type [ReportTemplates](#operation/getOneReportTemplates)
     */
    reportTemplate?: (ReportTemplatesId | ReportTemplatesItem);
    /**
     * The mobile schedule ocurrence log: ID of the resource by default OR *on demand* JSON object of type [MobileScheduleOccurrenceLogs](#operation/getOneMobileScheduleOccurrenceLogs)
     */
    mobileScheduleOccurrenceLog?: (MobileScheduleOccurrenceLogsId | MobileScheduleOccurrenceLogsItem);
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace MobileScheduleOccurrencesItem {

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