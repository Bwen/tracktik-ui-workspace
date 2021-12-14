/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointTourSessionsCollection = {
    /**
     * Tour
     */
    tour?: CheckpointToursId;
    /**
     * This field was deprecated in favor of `performedBy`
     */
    employee?: EmployeesId;
    /**
     * Performed By
     */
    performedBy?: EmployeesId;
    /**
     * Status
     */
    status?: CheckpointTourSessionsCollection.status;
    /**
     * Start Date Time
     */
    startedOn?: TimeStampNumber;
    /**
     * End Date Time
     */
    endedOn?: TimeStampNumber;
    /**
     * Duration
     */
    durationMinutes?: Minutes;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
    /**
     * Checkpoint total
     */
    checkpointsTotal?: Integer;
    /**
     * Checkpoint scanned total
     */
    checkpointsScannedTotal?: Integer;
    /**
     * Checkpoint missed total
     */
    checkpointsMissedTotal?: Integer;
    /**
     * Batch ID
     */
    batchId?: string;
    /**
     * Reason for the incomplete tour
     */
    incompleteReason?: string;
    /**
     * System ID
     */
    id?: Integer;
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
}

export namespace CheckpointTourSessionsCollection {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
    }


}