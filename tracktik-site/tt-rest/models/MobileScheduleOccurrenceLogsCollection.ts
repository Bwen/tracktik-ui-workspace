/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileScheduleOccurrencesId } from './MobileScheduleOccurrencesId';
import type { MobileSchedulesId } from './MobileSchedulesId';
import type { ReportsId } from './ReportsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrenceLogsCollection = {
    /**
     * Action date
     */
    actionDate?: Date;
    /**
     * Status
     */
    status?: MobileScheduleOccurrenceLogsCollection.status;
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
     * Mobile runsheet session
     */
    mobileRunsheetSession?: MobileRunsheetSessionsId;
    /**
     * Mobile schedule
     */
    mobileSchedule?: MobileSchedulesId;
    /**
     * Mobile schedule
     */
    mobileScheduleOccurrence?: MobileScheduleOccurrencesId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Report
     */
    report?: ReportsId;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace MobileScheduleOccurrenceLogsCollection {

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