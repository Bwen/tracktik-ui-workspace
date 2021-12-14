/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileRunsheetsItem } from './MobileRunsheetsItem';
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
import type { Uri } from './Uri';

export type MobileSchedulesItem = {
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Day of week start
     */
    dayOfWeekStart?: MobileSchedulesItem.dayOfWeekStart;
    /**
     * Day of week end
     */
    dayOfWeekEnd?: MobileSchedulesItem.dayOfWeekEnd;
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
    beginServiceOn?: TimeStampDate;
    /**
     * This field was deprecated in favor of `beginServiceOn`
     */
    beginServiceDate?: TimeStampDate;
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
     * Mobile runsheet sort order: *On demand*
     */
    mobileRunsheetSortOrder?: Integer;
    /**
     * Task type: ID of the resource by default OR *on demand* JSON object of type [TaskTypes](#operation/getOneTaskTypes)
     */
    taskType?: (TaskTypesId | TaskTypesItem);
    /**
     * Mobile runsheet: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheets](#operation/getOneMobileRunsheets)
     */
    mobileRunsheet?: (MobileRunsheetsId | MobileRunsheetsItem);
    /**
     * Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
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
     * Is Adhoc
     */
    isAdhoc?: Boolean;
    /**
     * Adhoc Selectable: *On demand*
     */
    adhocSelectable?: Boolean;
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
}

export namespace MobileSchedulesItem {

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