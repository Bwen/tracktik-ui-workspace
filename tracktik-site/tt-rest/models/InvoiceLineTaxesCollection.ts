/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { Integer } from './Integer';
import type { InvoiceLinesId } from './InvoiceLinesId';
import type { Label } from './Label';
import type { TaxClassItemsId } from './TaxClassItemsId';
import type { Uri } from './Uri';

export type InvoiceLineTaxesCollection = {
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