/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftProposalQueueItemsItem = {
    /**
     * If the shift proposal was sent via SMS
     */
    viaSms?: Label;
    /**
     * Operator has logged that they called the guard to relay the shift proposal
     */
    viaCall?: Label;
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
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
    status?: ShiftProposalQueueItemsItem.status;
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
    premiumType?: ShiftProposalQueueItemsItem.premiumType;
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
    distributionType?: ShiftProposalQueueItemsItem.distributionType;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace ShiftProposalQueueItemsItem {

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