/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { CheckpointTourAssignmentsItem } from './CheckpointTourAssignmentsItem';
import type { CheckpointTourSchedulesItem } from './CheckpointTourSchedulesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointToursItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Special Instructions
     */
    specialInstructions?: TextArea;
    /**
     * This field was deprecated in favor of `specialInstructions`
     */
    details?: TextArea;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Status
     */
    status?: CheckpointToursItem.status;
    /**
     * This field was deprecated in favor of `status`
     */
    active?: boolean;
    /**
     * Grace Period
     */
    gracePeriod?: Minutes;
    /**
     * Estimated Duration
     */
    estimatedDuration?: Minutes;
    /**
     * Checkpoint Assignments: *On demand*. List of JSON objects of type [CheckpointTourAssignments](#operation/getOneCheckpointTourAssignments)
     */
    checkpoints?: Array<CheckpointTourAssignmentsItem>;
    /**
     * Notes: *On demand*. List of JSON objects of type [CheckpointTourSchedules](#operation/getOneCheckpointTourSchedules)
     */
    schedules?: Array<CheckpointTourSchedulesItem>;
    /**
     * Recurrence Type
     */
    recurrenceType?: CheckpointToursItem.recurrenceType;
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

export namespace CheckpointToursItem {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }

    /**
     * Recurrence Type
     */
    export enum recurrenceType {
        DAILY = 'DAILY',
        WEEKLY = 'WEEKLY',
        MONTHLY = 'MONTHLY',
    }


}