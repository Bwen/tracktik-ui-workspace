/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type BillItemsItem = {
    /**
     * The name of the bill item
     */
    name?: string;
    /**
     * Chart of account ID or custom ID
     */
    customId?: string;
    /**
     * Status of the bill item. This attribute has been deprecated and will be removed in a future version.
     */
    status?: BillItemsItem.status;
    /**
     * If the bill item is available for all region. If not select a region
     */
    isGlobal?: boolean;
    /**
     * Only set a region, when isGlobal is false: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
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

export namespace BillItemsItem {

    /**
     * Status of the bill item. This attribute has been deprecated and will be removed in a future version.
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }


}