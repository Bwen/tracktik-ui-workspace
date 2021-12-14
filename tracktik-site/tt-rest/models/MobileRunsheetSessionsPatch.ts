/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { WorkSessionsId } from './WorkSessionsId';

export type MobileRunsheetSessionsPatch = {
    /**
     * Status
     */
    status?: MobileRunsheetSessionsPatch.status;
    /**
     * Action date
     */
    actionDate?: Date;
    /**
     * Periode date
     */
    periodDate?: Date;
    /**
     * Start time
     */
    startedOn?: TimeStampNumber;
    /**
     * End time
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
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Mobile runsheet
     */
    mobileRunsheet?: MobileRunsheetsId;
    /**
     * Work session
     */
    workSession?: WorkSessionsId;
    /**
     * Mobile schedule occurrence logs
     */
    mobileScheduleOccurrenceLogs?: Array<MobileScheduleOccurrenceLogsId>;
    /**
     * Incomplete Runsheet Reason
     */
    incompleteRunsheetReason?: Label;
}

export namespace MobileRunsheetSessionsPatch {

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