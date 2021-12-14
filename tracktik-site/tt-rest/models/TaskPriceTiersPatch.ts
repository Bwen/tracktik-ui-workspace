/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { ContractsId } from './ContractsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { JSON } from './JSON';
import type { Number } from './Number';
import type { Percentage } from './Percentage';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';

export type TaskPriceTiersPatch = {
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Charge type
     */
    chargeType?: TaskPriceTiersPatch.chargeType;
    /**
     * Service model
     */
    serviceModel?: TaskPriceTiersPatch.serviceModel;
    /**
     * The rate depends on the charge type
     */
    rate?: CurrencyRate;
    /**
     * The rate matrix is showed when chargeType is MATRIX
     */
    rateMatrix?: JSON;
    /**
     * Instructions
     */
    instructions?: TextArea;
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
     * Account
     */
    account?: AccountsId;
    /**
     * Discount (%)
     */
    discount?: Percentage;
    /**
     * Fuel Surcharge (%)
     */
    fuelSurcharge?: Percentage;
}

export namespace TaskPriceTiersPatch {

    /**
     * Charge type
     */
    export enum chargeType {
        CONTRACTED = 'CONTRACTED',
        ACTUAL = 'ACTUAL',
        MATRIX = 'MATRIX',
        FLATRATE = 'FLATRATE',
        PREPAID = 'PREPAID',
    }

    /**
     * Service model
     */
    export enum serviceModel {
        CONTRACT_PATROL_SERVICE_MODEL = 'CONTRACT_PATROL_SERVICE_MODEL',
        CONTRACT_PATROL_VISITS_SERVICE_MODEL = 'CONTRACT_PATROL_VISITS_SERVICE_MODEL',
        DISPATCH_SERVICE_MODEL = 'DISPATCH_SERVICE_MODEL',
    }


}