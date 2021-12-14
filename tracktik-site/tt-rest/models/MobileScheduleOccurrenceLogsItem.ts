/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileRunsheetSessionsItem } from './MobileRunsheetSessionsItem';
import type { MobileScheduleOccurrenceReassignmentsItem } from './MobileScheduleOccurrenceReassignmentsItem';
import type { MobileScheduleOccurrencesId } from './MobileScheduleOccurrencesId';
import type { MobileScheduleOccurrencesItem } from './MobileScheduleOccurrencesItem';
import type { MobileSchedulesId } from './MobileSchedulesId';
import type { MobileSchedulesItem } from './MobileSchedulesItem';
import type { ReportsId } from './ReportsId';
import type { ReportsItem } from './ReportsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrenceLogsItem = {
    /**
     * Action date
     */
    actionDate?: Date;
    /**
     * Status
     */
    status?: MobileScheduleOccurrenceLogsItem.status;
    /**
     * Last status time
     */
    lastStatusOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `lastStatusOn`
     */
    lastStatusTime?: TimeStampNumber;
    /**
     * On site time
     */
    onSiteOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `onSiteOn`
     */
    onSiteTime?: TimeStampNumber;
    /**
     * En route time
     */
    enRouteOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `enRouteOn`
     */
    enRouteTime?: TimeStampNumber;
    /**
     * Completed time
     */
    completedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `completedOn`
     */
    completedTime?: TimeStampNumber;
    /**
     * Mobile runsheet session: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheetSessions](#operation/getOneMobileRunsheetSessions)
     */
    mobileRunsheetSession?: (MobileRunsheetSessionsId | MobileRunsheetSessionsItem);
    /**
     * Mobile schedule: ID of the resource by default OR *on demand* JSON object of type [MobileSchedules](#operation/getOneMobileSchedules)
     */
    mobileSchedule?: (MobileSchedulesId | MobileSchedulesItem);
    /**
     * Mobile schedule: ID of the resource by default OR *on demand* JSON object of type [MobileScheduleOccurrences](#operation/getOneMobileScheduleOccurrences)
     */
    mobileScheduleOccurrence?: (MobileScheduleOccurrencesId | MobileScheduleOccurrencesItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Report: ID of the resource by default OR *on demand* JSON object of type [Reports](#operation/getOneReports)
     */
    report?: (ReportsId | ReportsItem);
    /**
     * Mobile schedule occurrence reassignments history: *On demand*. List of JSON objects of type [MobileScheduleOccurrenceReassignments](#operation/getOneMobileScheduleOccurrenceReassignments)
     */
    mobileScheduleOccurrenceReassignments?: Array<MobileScheduleOccurrenceReassignmentsItem>;
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

export namespace MobileScheduleOccurrenceLogsItem {

    /**
     * Status
     */
    export enum status {
        INITIATED = 'INITIATED',
        ASSIGNED = 'ASSIGNED',
        ONSITE = 'ONSITE',
        COMPLETED = 'COMPLETED',
        EN_ROUTE = 'EN_ROUTE',
        TO_REASSIGN = 'TO_REASSIGN',
        MISSED = 'MISSED',
    }


}