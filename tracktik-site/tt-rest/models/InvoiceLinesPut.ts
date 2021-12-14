/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillableItemsId } from './BillableItemsId';
import type { ClientsId } from './ClientsId';
import type { Currency } from './Currency';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { InvoicesId } from './InvoicesId';
import type { TaxClassesId } from './TaxClassesId';
import type { TimeStampDate } from './TimeStampDate';

export type InvoiceLinesPut = {
    /**
     * Quantity
     */
    quantity: Decimal;
    /**
     * Unit Price
     */
    unitPrice: Currency;
    /**
     * Relation Guid
     */
    relationGuid?: Integer;
    /**
     * Service Location
     */
    serviceLocation?: ClientsId;
    /**
     * Service Date
     */
    serviceDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `serviceDateTime`
     */
    serviceDate?: TimeStampDate;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Taxable
     */
    taxable?: boolean;
    /**
     * Billable Items
     */
    billableItems?: Array<BillableItemsId>;
    /**
     * Invoice
     */
    invoice?: InvoicesId;
}