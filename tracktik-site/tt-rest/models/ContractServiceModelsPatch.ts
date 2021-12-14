/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { JSON } from './JSON';

export type ContractServiceModelsPatch = {
    /**
     * This field was deprecated in favor of `serviceType`
     */
    name?: string;
    /**
     * Service Type
     */
    serviceType?: ContractServiceModelsPatch.serviceType;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Settings
     */
    settings?: JSON;
}

export namespace ContractServiceModelsPatch {

    /**
     * Service Type
     */
    export enum serviceType {
        HOURLY_GUARDING = 'HOURLY_GUARDING',
        SCHEDULED_PATROLS_ENFORCE = 'SCHEDULED_PATROLS_ENFORCE',
        SCHEDULED_PATROLS_ONGOING = 'SCHEDULED_PATROLS_ONGOING',
        RECURRENT_FIXED_COST = 'RECURRENT_FIXED_COST',
        DISPATCH_SERVICE = 'DISPATCH_SERVICE',
    }


}