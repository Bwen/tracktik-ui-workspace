/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetsId } from './MobileRunsheetsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { WorkSessionsId } from './WorkSessionsId';

export type MobileRunsheetSessionsCollection = {
    /**
     * Status
     */
    status?: MobileRunsheetSessionsCollection.status;
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
     * Incomplete Runsheet Reason
     */
    incompleteRunsheetReason?: Label;
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

export namespace MobileRunsheetSessionsCollection {

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