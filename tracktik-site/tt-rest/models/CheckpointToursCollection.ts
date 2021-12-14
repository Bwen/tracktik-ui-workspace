/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { PositionsId } from './PositionsId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointToursCollection = {
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
     * Account
     */
    account?: AccountsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Status
     */
    status?: CheckpointToursCollection.status;
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
     * Recurrence Type
     */
    recurrenceType?: CheckpointToursCollection.recurrenceType;
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

export namespace CheckpointToursCollection {

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