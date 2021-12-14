/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { InvoiceLinesId } from './InvoiceLinesId';
import type { TaxClassItemsId } from './TaxClassItemsId';

export type InvoiceLineTaxesPatch = {
    /**
     * Amount
     */
    amount?: Currency;
    /**
     * Tax Class Item
     */
    taxClassItem?: TaxClassItemsId;
    /**
     * Invoice Line
     */
    invoiceLine?: Array<InvoiceLinesId>;
}