/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Date } from './Date';
import type { Integer } from './Integer';
import type { InvoicesId } from './InvoicesId';
import type { InvoicesItem } from './InvoicesItem';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ContractOccurrenceLogsItem = {
    /**
     * Status
     */
    status?: ContractOccurrenceLogsItem.status;
    /**
     * Occurrence Date
     */
    occurrenceDate?: Date;
    /**
     * Invoice: ID of the resource by default OR *on demand* JSON object of type [Invoices](#operation/getOneInvoices)
     */
    invoice?: (InvoicesId | InvoicesItem);
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
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
}

export namespace ContractOccurrenceLogsItem {

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