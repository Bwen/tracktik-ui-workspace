/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { Currency } from './Currency';
import type { DateTime } from './DateTime';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { InvoicesId } from './InvoicesId';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type InvoiceLinesCollection = {
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
     * Line Tax Total
     */
    taxTotal?: Currency;
    /**
     * Invoice
     */
    invoice?: InvoicesId;
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
    /**
     * Time Zone
     */
    timeZone?: string;
}