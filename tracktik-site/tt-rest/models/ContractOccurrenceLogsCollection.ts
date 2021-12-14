/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { Integer } from './Integer';
import type { InvoicesId } from './InvoicesId';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ContractOccurrenceLogsCollection = {
    /**
     * Status
     */
    status?: ContractOccurrenceLogsCollection.status;
    /**
     * Occurrence Date
     */
    occurrenceDate?: Date;
    /**
     * Invoice
     */
    invoice?: InvoicesId;
    /**
     * Contract
     */
    contract?: ContractsId;
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
}

export namespace ContractOccurrenceLogsCollection {

    /**
     * Status
     */
    export enum status {
        CANCELLED = 'CANCELLED',
        DRAFT = 'DRAFT',
        PRE_PROCESSED = 'PRE_PROCESSED',
        PRE_PROCESSED_ERROR = 'PRE_PROCESSED_ERROR',
        PROCESSED = 'PROCESSED',
    }


}