/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ContractServiceModelsCollection = {
    /**
     * This field was deprecated in favor of `serviceType`
     */
    name?: string;
    /**
     * Service Type
     */
    serviceType?: ContractServiceModelsCollection.serviceType;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Settings
     */
    settings?: JSON;
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

export namespace ContractServiceModelsCollection {

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