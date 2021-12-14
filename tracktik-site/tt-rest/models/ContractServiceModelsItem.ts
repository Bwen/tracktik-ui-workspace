/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type ContractServiceModelsItem = {
    /**
     * This field was deprecated in favor of `serviceType`
     */
    name?: string;
    /**
     * Service Type
     */
    serviceType?: ContractServiceModelsItem.serviceType;
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Settings
     */
    settings?: JSON;
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

export namespace ContractServiceModelsItem {

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