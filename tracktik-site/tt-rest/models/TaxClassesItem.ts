/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TaxClassItemsItem } from './TaxClassItemsItem';
import type { Uri } from './Uri';

export type TaxClassesItem = {
    /**
     * Tax Class
     */
    name?: string;
    /**
     * Status
     */
    status?: TaxClassesItem.status;
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Items: *On demand*. List of JSON objects of type [TaxClassItems](#operation/getOneTaxClassItems)
     */
    items?: Array<TaxClassItemsItem>;
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

export namespace TaxClassesItem {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}