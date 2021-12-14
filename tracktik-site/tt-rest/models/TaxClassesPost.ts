/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';
import type { TaxClassItemsId } from './TaxClassItemsId';

export type TaxClassesPost = {
    /**
     * Tax Class
     */
    name: string;
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Items
     */
    items?: Array<TaxClassItemsId>;
}