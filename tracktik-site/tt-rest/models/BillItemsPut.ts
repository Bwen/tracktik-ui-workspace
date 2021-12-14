/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';

export type BillItemsPut = {
    /**
     * The name of the bill item
     */
    name: string;
    /**
     * Chart of account ID or custom ID
     */
    customId?: string;
    /**
     * Status of the bill item. This attribute has been deprecated and will be removed in a future version.
     */
    status: BillItemsPut.status;
    /**
     * If the bill item is available for all region. If not select a region
     */
    isGlobal: boolean;
    /**
     * Only set a region, when isGlobal is false
     */
    region: RegionsId;
}

export namespace BillItemsPut {

    /**
     * Status of the bill item. This attribute has been deprecated and will be removed in a future version.
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }


}