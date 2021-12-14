/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaxClassItemsId } from './TaxClassItemsId';

export type TaxClassesPatch = {
    /**
     * Tax Class
     */
    name?: string;
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Items
     */
    items?: Array<TaxClassItemsId>;
}