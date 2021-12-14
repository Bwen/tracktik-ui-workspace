/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Minutes } from './Minutes';
import type { PositionsId } from './PositionsId';
import type { TextArea } from './TextArea';

export type CheckpointToursPatch = {
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
    status?: CheckpointToursPatch.status;
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
    recurrenceType?: CheckpointToursPatch.recurrenceType;
}

export namespace CheckpointToursPatch {

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