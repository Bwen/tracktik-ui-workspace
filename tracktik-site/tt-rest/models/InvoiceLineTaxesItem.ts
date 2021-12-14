/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { Integer } from './Integer';
import type { InvoiceLinesItem } from './InvoiceLinesItem';
import type { Label } from './Label';
import type { TaxClassItemsId } from './TaxClassItemsId';
import type { TaxClassItemsItem } from './TaxClassItemsItem';
import type { Uri } from './Uri';

export type InvoiceLineTaxesItem = {
    /**
     * Amount
     */
    amount?: Currency;
    /**
     * Tax Class Item: ID of the resource by default OR *on demand* JSON object of type [TaxClassItems](#operation/getOneTaxClassItems)
     */
    taxClassItem?: (TaxClassItemsId | TaxClassItemsItem);
    /**
     * Invoice Line: ID of the resource by default OR *on demand* JSON object of type InvoiceLines
     */
    invoiceLine?: Array<InvoiceLinesItem>;
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