/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { InvoicesId } from './InvoicesId';
import type { RegionsId } from './RegionsId';

export type InvoiceBatchesPatch = {
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Batch start date
     */
    startDate?: Date;
    /**
     * Batch end date
     */
    endDate?: Date;
    /**
     * Boolean value indicating if the adhoc invoices are included ot not.
     */
    adhocsIncluded?: Boolean;
    /**
     * Invoices
     */
    invoices?: Array<InvoicesId>;
    /**
     * Adhoc Invoices
     */
    adhocInvoices?: Array<InvoicesId>;
}