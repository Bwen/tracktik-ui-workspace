/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { InvoicesId } from './InvoicesId';

export type ContractOccurrenceLogsPost = {
    /**
     * Status
     */
    status?: ContractOccurrenceLogsPost.status;
    /**
     * Occurrence Date
     */
    occurrenceDate: Date;
    /**
     * Invoice
     */
    invoice?: InvoicesId;
    /**
     * Contract
     */
    contract: ContractsId;
}

export namespace ContractOccurrenceLogsPost {

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