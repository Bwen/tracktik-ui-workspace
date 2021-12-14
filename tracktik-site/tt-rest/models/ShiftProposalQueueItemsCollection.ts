/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftProposalQueueItemsCollection = {
    /**
     * If the shift proposal was sent via SMS
     */
    viaSms?: Label;
    /**
     * Operator has logged that they called the guard to relay the shift proposal
     */
    viaCall?: Label;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Time the shift proposal was sent
     */
    sentOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `sentOn`
     */
    sentAt?: TimeStampNumber;
    /**
     * Time the shift proposal was answered
     */
    answeredOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `answeredOn`
     */
    answeredAt?: TimeStampNumber;
    /**
     * Time the shift proposal expires
     */
    expiresOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `expiresOn`
     */
    expiresAt?: TimeStampNumber;
    /**
     * Shift proposal answer
     */
    answer?: Label;
    /**
     * If the shift proposed was taken
     */
    status?: ShiftProposalQueueItemsCollection.status;
    /**
     * Shift proposal email
     */
    email?: Label;
    /**
     * Shift proposal SMS number
     */
    smsNumber?: Label;
    /**
     * Shift proposal Call number
     */
    callNumber?: Label;
    /**
     * Premium Type
     */
    premiumType?: ShiftProposalQueueItemsCollection.premiumType;
    /**
     * Premium Fixed Amount
     */
    premiumFixedAmount?: Label;
    /**
     * Premium Top Amount
     */
    premiumTopAmount?: Label;
    /**
     * Effective Rate
     */
    effectiveRate?: Label;
    /**
     * Distribution Sequence Index
     */
    distributionSequenceIndex?: Label;
    /**
     * Distribution Type
     */
    distributionType?: ShiftProposalQueueItemsCollection.distributionType;
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

export namespace ShiftProposalQueueItemsCollection {

    /**
     * If the shift proposed was taken
     */
    export enum status {
        AVAILABLE = 'AVAILABLE',
        ACCEPTED = 'ACCEPTED',
        REFUSED = 'REFUSED',
        ACCEPTED_BUT_ALREADY_TAKEN = 'ACCEPTED_BUT_ALREADY_TAKEN',
        EXPIRED_BECAUSE_OF_NEW = 'EXPIRED_BECAUSE_OF_NEW',
    }

    /**
     * Premium Type
     */
    export enum premiumType {
        FIXED = 'FIXED',
        TOP = 'TOP',
        NONE = 'NONE',
    }

    /**
     * Distribution Type
     */
    export enum distributionType {
        BATCH = 'BATCH',
        SEQUENCE = 'SEQUENCE',
    }


}