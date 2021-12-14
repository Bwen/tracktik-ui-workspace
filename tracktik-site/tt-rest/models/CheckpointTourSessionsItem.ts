/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointScansItem } from './CheckpointScansItem';
import type { CheckpointsItem } from './CheckpointsItem';
import type { CheckpointTourSessionCommentsItem } from './CheckpointTourSessionCommentsItem';
import type { CheckpointToursId } from './CheckpointToursId';
import type { CheckpointToursItem } from './CheckpointToursItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointTourSessionsItem = {
    /**
     * Tour: ID of the resource by default OR *on demand* JSON object of type [CheckpointTours](#operation/getOneCheckpointTours)
     */
    tour?: (CheckpointToursId | CheckpointToursItem);
    /**
     * This field was deprecated in favor of `performedBy`: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Performed By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    performedBy?: (EmployeesId | EmployeesItem);
    /**
     * Status
     */
    status?: CheckpointTourSessionsItem.status;
    /**
     * Start Date Time: *On demand*
     */
    startedOn?: TimeStampNumber;
    /**
     * End Date Time: *On demand*
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
     * Checkpoint Cache: *On demand*. List of JSON objects of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpoints?: Array<CheckpointsItem>;
    /**
     * Checkpoint scanned total
     */
    checkpointsScannedTotal?: Integer;
    /**
     * Checkpoint scan: *On demand*. List of JSON objects of type [CheckpointScans](#operation/getOneCheckpointScans)
     */
    checkpointsScans?: Array<CheckpointScansItem>;
    /**
     * Checkpoint missed total
     */
    checkpointsMissedTotal?: Integer;
    /**
     * Checkpoint missed: *On demand*. List of JSON objects of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpointsMissed?: Array<CheckpointsItem>;
    /**
     * Batch ID: *On demand*
     */
    batchId?: string;
    /**
     * Comments: *On demand*. List of JSON objects of type CheckpointTourSessionComments
     */
    comments?: Array<CheckpointTourSessionCommentsItem>;
    /**
     * Reason for the incomplete tour: *On demand*
     */
    incompleteReason?: string;
    /**
     * System ID
     */
    id?: Integer;
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
}

export namespace CheckpointTourSessionsItem {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
    }


}