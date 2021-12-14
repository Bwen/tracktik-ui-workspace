/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractOccurrenceLogsId } from './ContractOccurrenceLogsId';
import type { Date } from './Date';
import type { Integer } from './Integer';

export type ContractOccurrencesPut = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * Occurrence Date
     */
    occurrenceDate?: Date;
    /**
     * This field was deprecated in favor of `log`
     */
    status?: Array<ContractOccurrenceLogsId>;
    /**
     * Occurrence Log
     */
    log?: ContractOccurrenceLogsId;
}