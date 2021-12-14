/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { Number } from './Number';
import type { TaxClassesId } from './TaxClassesId';

export type PriceTiersPost = {
    /**
     * Name
     */
    name: string;
    /**
     * Custom identifier
     */
    customId?: string;
    /**
     * Instructions
     */
    instructions?: string;
    /**
     * Effective date
     */
    effectiveDate?: Date;
    /**
     * Valid until date
     */
    validUntilDate?: Date;
    /**
     * Cancellation Threshold
     */
    cancellationThresholdInMinutes?: Number;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
}