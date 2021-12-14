/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileRunsheetsItem } from './MobileRunsheetsItem';
import type { MobileScheduleOccurrenceLogsItem } from './MobileScheduleOccurrenceLogsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkSessionsId } from './WorkSessionsId';
import type { WorkSessionsItem } from './WorkSessionsItem';

export type MobileRunsheetSessionsItem = {
    /**
     * Status
     */
    status?: MobileRunsheetSessionsItem.status;
    /**
     * Action date
     */
    actionDate?: Date;
    /**
     * Periode date
     */
    periodDate?: Date;
    /**
     * Start time: *On demand*
     */
    startedOn?: TimeStampNumber;
    /**
     * End time: *On demand*
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endTime?: TimeStampNumber;
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Mobile runsheet: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheets](#operation/getOneMobileRunsheets)
     */
    mobileRunsheet?: (MobileRunsheetsId | MobileRunsheetsItem);
    /**
     * Work session: ID of the resource by default OR *on demand* JSON object of type [WorkSessions](#operation/getOneWorkSessions)
     */
    workSession?: (WorkSessionsId | WorkSessionsItem);
    /**
     * Mobile schedule occurrence logs: *On demand*. List of JSON objects of type [MobileScheduleOccurrenceLogs](#operation/getOneMobileScheduleOccurrenceLogs)
     */
    mobileScheduleOccurrenceLogs?: Array<MobileScheduleOccurrenceLogsItem>;
    /**
     * Incomplete Runsheet Reason: *On demand*
     */
    incompleteRunsheetReason?: Label;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace MobileRunsheetSessionsItem {

    /**
     * Status
     */
    export enum status {
        INITIATED = 'INITIATED',
        STARTED = 'STARTED',
        ENDED = 'ENDED',
        ENDED_INCOMPLETED = 'ENDED_INCOMPLETED',
    }


}