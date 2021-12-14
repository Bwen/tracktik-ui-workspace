/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileScheduleOccurrencesId } from './MobileScheduleOccurrencesId';
import type { MobileSchedulesId } from './MobileSchedulesId';
import type { ReportsId } from './ReportsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type MobileScheduleOccurrenceLogsPost = {
    /**
     * Action date
     */
    actionDate: Date;
    /**
     * Status
     */
    status: MobileScheduleOccurrenceLogsPost.status;
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
    mobileRunsheetSession: MobileRunsheetSessionsId;
    /**
     * Mobile schedule
     */
    mobileSchedule: MobileSchedulesId;
    /**
     * Mobile schedule
     */
    mobileScheduleOccurrence?: MobileScheduleOccurrencesId;
    /**
     * Employee
     */
    employee: EmployeesId;
    /**
     * Report
     */
    report?: ReportsId;
}

export namespace MobileScheduleOccurrenceLogsPost {

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