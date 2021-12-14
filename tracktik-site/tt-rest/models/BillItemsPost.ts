/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';

export type BillItemsPost = {
    /**
     * The name of the bill item
     */
    name: string;
    /**
     * Chart of account ID or custom ID
     */
    customId?: string;
    /**
     * If the bill item is available for all region. If not select a region
     */
    isGlobal: boolean;
    /**
     * Only set a region, when isGlobal is false
     */
    region: RegionsId;
}