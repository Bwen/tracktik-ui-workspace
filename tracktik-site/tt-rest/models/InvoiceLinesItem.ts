/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillableItemsItem } from './BillableItemsItem';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { Currency } from './Currency';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { InvoicesId } from './InvoicesId';
import type { InvoicesItem } from './InvoicesItem';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type InvoiceLinesItem = {
    /**
     * Quantity
     */
    quantity?: Decimal;
    /**
     * Unit Price
     */
    unitPrice?: Currency;
    /**
     * Subtotal without taxes
     */
    lineSubTotal?: Currency;
    /**
     * Relation Guid
     */
    relationGuid?: Integer;
    /**
     * Service Location: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    serviceLocation?: (ClientsId | ClientsItem);
    /**
     * Service Date
     */
    serviceDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `serviceDateTime`
     */
    serviceDate?: TimeStampDate;
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Taxable
     */
    taxable?: boolean;
    /**
     * Line Tax Total: *On demand*
     */
    taxTotal?: Currency;
    /**
     * Billable Items: *On demand*. List of JSON objects of type [BillableItems](#operation/getOneBillableItems)
     */
    billableItems?: Array<BillableItemsItem>;
    /**
     * Invoice: ID of the resource by default OR *on demand* JSON object of type [Invoices](#operation/getOneInvoices)
     */
    invoice?: (InvoicesId | InvoicesItem);
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
    /**
     * Time Zone
     */
    timeZone?: string;
}