/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type BillItemsCollection = {
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
    status?: BillItemsCollection.status;
    /**
     * If the bill item is available for all region. If not select a region
     */
    isGlobal?: boolean;
    /**
     * Only set a region, when isGlobal is false
     */
    region?: RegionsId;
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

export namespace BillItemsCollection {

    /**
     * Status of the bill item. This attribute has been deprecated and will be removed in a future version.
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }


}