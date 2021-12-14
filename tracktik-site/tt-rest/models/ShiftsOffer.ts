/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';

export type ShiftsOffer = {
    /**
     * The list of employees sorted by priority
     */
    users: JSON;
    /**
     * Select the shift offer method
     */
    method?: ShiftsOffer.method;
    /**
     * Offer in batch or in sequence
     */
    strategy: ShiftsOffer.strategy;
    /**
     * Interval time for the sequence strategy
     */
    sequenceInterval: number;
    /**
     * Offer a pay premium
     */
    premium?: ShiftsOffer.premium;
    /**
     * Premium rate for the PREMIUM_FIXED
     */
    premiumFixedAmount: number;
    /**
     * Premium rate for the PREMIUM_TOP
     */
    premiumTopAmount: number;
}

export namespace ShiftsOffer {

    /**
     * Select the shift offer method
     */
    export enum method {
        SMS = 'SMS',
    }

    /**
     * Offer in batch or in sequence
     */
    export enum strategy {
        BATCH = 'BATCH',
        SEQUENCE = 'SEQUENCE',
    }

    /**
     * Offer a pay premium
     */
    export enum premium {
        NO_PREMIUM = 'NO_PREMIUM',
        PREMIUM_FIXED = 'PREMIUM_FIXED',
        PREMIUM_TOP = 'PREMIUM_TOP',
    }


}